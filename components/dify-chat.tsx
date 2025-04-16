"use client"

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useDify } from '@/hooks/use-dify'

export function DifyChat() {
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [input, setInput] = useState('');
  const { sendMessage, streamMessage, isLoading, error } = useDify();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fix hydration issues by ensuring component only renders fully on client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    // Add an empty assistant message that will be updated with streaming content
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
    
    streamMessage(
      userMessage,
      (chunk) => {
        try {
          // Update the last message with the new chunk
          setMessages(prev => {
            const newMessages = [...prev];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage && lastMessage.role === 'assistant') {
              lastMessage.content += chunk;
            }
            return newMessages;
          });
        } catch (e) {
          console.error('Error processing chunk:', e);
        }
      },
      (response) => {
        console.log('Completed response:', response);
      }
    );
  };

  // Return a simplified version until client-side hydration is complete
  if (!mounted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Chat with Dify AI</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] overflow-y-auto">
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">Loading chat...</p>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full gap-2">
            <div className="flex-1 h-10 bg-muted rounded-md"></div>
            <div className="w-20 h-10 bg-muted rounded-md"></div>
          </div>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Chat with Dify AI</CardTitle>
      </CardHeader>
      <CardContent className="h-[400px] overflow-y-auto">
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