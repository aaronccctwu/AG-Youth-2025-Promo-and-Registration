import { useState, useCallback } from 'react';
import { sendDifyRequest, streamDifyResponse, DifyRequestOptions, DifyResponse } from '@/lib/api';

interface UseDifyOptions {
  defaultConversationId?: string;
  defaultUser?: string;
}

export function useDify(options: UseDifyOptions = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [conversationId, setConversationId] = useState(options.defaultConversationId || '');
  
  const sendMessage = useCallback(async (query: string, inputs = {}, files = []): Promise<DifyResponse> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const requestOptions: DifyRequestOptions = {
        query,
        inputs,
        conversationId,
        user: options.defaultUser || '',
        files,
      };
      
      const response = await sendDifyRequest(requestOptions);
      setConversationId(response.conversation_id);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [conversationId, options.defaultUser]);
  
  const streamMessage = useCallback((
    query: string, 
    onChunk: (chunk: string) => void,
    onComplete: (response: DifyResponse) => void,
    inputs = {},
    files = []
  ) => {
    setIsLoading(true);
    setError(null);
    
    const requestOptions: DifyRequestOptions = {
      query,
      inputs,
      conversationId,
      user: options.defaultUser || '',
      files,
      responseMode: 'streaming',
    };
    
    streamDifyResponse(
      requestOptions,
      onChunk,
      (response) => {
        setConversationId(response.conversation_id);
        setIsLoading(false);
        onComplete(response);
      }
    ).catch(err => {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      setIsLoading(false);
    });
  }, [conversationId, options.defaultUser]);
  
  return {
    sendMessage,
    streamMessage,
    isLoading,
    error,
    conversationId,
    setConversationId,
  };
}