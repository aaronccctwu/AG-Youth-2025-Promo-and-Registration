"use client"

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useDify } from '@/hooks/use-dify'
import { MessageCircle, X } from 'lucide-react'

export function DifyChat() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { sendMessage, streamMessage, isLoading, error: difyError } = useDify();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fix hydration issues by ensuring component only renders fully on client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (difyError) {
      setError(difyError.message);
      console.error("Dify API error:", difyError);
    }
  }, [difyError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setError(null);
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    try {
      // Add an empty assistant message that will be updated with streaming content
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      
      streamMessage(
        userMessage,
        (chunk) => {
          try {
            // First, try to parse the chunk as JSON
            try {
              const parsedData = JSON.parse(chunk);
              
              // Check if this is a data object with event type
              if (parsedData && parsedData.data) {
                // Skip agent_thought events completely
                if (parsedData.data.event === 'agent_thought') {
                  return; // Don't update message with this chunk
                }
                
                // For agent_message events, extract the answer
                if (parsedData.data.event === 'agent_message' && parsedData.data.answer) {
                  // Update the last message with just the answer text
                  setMessages(prev => {
                    const newMessages = [...prev];
                    const lastMessage = newMessages[newMessages.length - 1];
                    if (lastMessage && lastMessage.role === 'assistant') {
                      lastMessage.content += parsedData.data.answer;
                    }
                    return newMessages;
                  });
                  return; // We've handled this chunk
                }
              }
              
              // If we couldn't extract a specific answer but it's valid JSON,
              // log it but don't update the message
              console.log("Received JSON chunk without extractable answer:", parsedData);
              return;
              
            } catch (parseError) {
              // Not JSON or couldn't parse, use the chunk as is
              setMessages(prev => {
                const newMessages = [...prev];
                const lastMessage = newMessages[newMessages.length - 1];
                if (lastMessage && lastMessage.role === 'assistant') {
                  lastMessage.content += chunk;
                }
                return newMessages;
              });
            }
          } catch (e) {
            console.error('Error processing chunk:', e);
          }
        },
        (response) => {
          console.log('Completed response:', response);
          // Check if the assistant message is still showing JSON data
          setMessages(prev => {
            const newMessages = [...prev];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage && lastMessage.role === 'assistant' && 
                (lastMessage.content.includes('"event":') || lastMessage.content.startsWith('data:'))) {
              // Try to extract a proper response from the complete message
              try {
                if (response && response.answer) {
                  lastMessage.content = response.answer;
                } else {
                  lastMessage.content = "I'm sorry, I couldn't generate a proper response.";
                }
              } catch (e) {
                lastMessage.content = "I'm sorry, I couldn't generate a proper response.";
              }
            }
            return newMessages;
          });
        }
      );
    } catch (err) {
      console.error("Error sending message:", err);
      setError(err instanceof Error ? err.message : "Failed to send message");
      // Remove the empty assistant message if there was an error
      setMessages(prev => prev.filter((_, i) => i !== prev.length - 1));
    }
  };

  // Return a simplified version until client-side hydration is complete
  if (!mounted) {
    return null;
  }

  // 聊天气泡按钮
  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="rounded-full w-20 h-20 shadow-lg flex items-center justify-center fixed bottom-6 right-6 z-50 bg-white text-black"
      >
        <MessageCircle size={32} />
      </Button>
    );
  }

  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Chat with Dify AI</CardTitle>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsOpen(false)}
          className="rounded-full"
        >
          <X size={18} />
        </Button>
      </CardHeader>
      <CardContent className="h-[400px] overflow-y-auto">
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md text-sm">
            Error: {error}
          </div>
        )}
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'
                }`}
              >
                {message.content || (message.role === 'assistant' && isLoading ? '...' : '')}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}