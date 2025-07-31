/**
 * API service for Dify.ai integration
 */

export interface DifyRequestOptions {
  query: string;
  inputs?: Record<string, any>;
  responseMode?: 'streaming' | 'blocking';
  conversationId?: string;
  user?: string;
  files?: Array<{
    type: string;
    transfer_method: string;
    url: string;
  }>;
}

export interface DifyResponse {
  answer: string;
  conversation_id: string;
  created_at: number;
  id: string;
}

const DIFY_API_URL = 'https://api.dify.ai/v1/chat-messages';
const DIFY_API_KEY = process.env.NEXT_PUBLIC_DIFY_API_KEY || '';

/**
 * Send a request to the Dify.ai API
 */
export async function sendDifyRequest(options: DifyRequestOptions): Promise<DifyResponse> {
  const { query, inputs = {}, responseMode = 'blocking', conversationId = '', user = 'anonymous-user', files = [] } = options;
  
  try {
    const response = await fetch(DIFY_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${DIFY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs,
        query,
        response_mode: responseMode,
        conversation_id: conversationId || undefined, // Don't send empty string
        user: user || 'anonymous-user', // Ensure we have a user ID
        files: files.length > 0 ? files : undefined, // Don't send empty array
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`API request failed with status ${response.status}: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending request to Dify API:', error);
    throw error;
  }
}

/**
 * Handle streaming response from Dify.ai
 */
export async function streamDifyResponse(options: DifyRequestOptions, 
  onChunk: (chunk: string) => void, 
  onComplete: (response: DifyResponse) => void) {
  
  const { query, inputs = {}, conversationId = '', user = 'anonymous-user', files = [] } = options;
  
  try {
    const response = await fetch(DIFY_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${DIFY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs,
        query,
        response_mode: 'streaming',
        conversation_id: conversationId || undefined, // Don't send empty string
        user: user || 'anonymous-user', // Ensure we have a user ID
        files: files.length > 0 ? files : undefined, // Don't send empty array
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`API request failed with status ${response.status}: ${errorText}`);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('Response body is not readable');
    }

    const decoder = new TextDecoder();
    let result: DifyResponse | null = null;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value, { stream: true });
      onChunk(chunk);
      
      try {
        // Try to parse the last complete JSON object
        const jsonStr = chunk.trim();
        if (jsonStr) {
          result = JSON.parse(jsonStr);
        }
      } catch (e) {
        // Ignore parsing errors for incomplete chunks
      }
    }

    if (result) {
      onComplete(result);
    }
  } catch (error) {
    console.error('Error streaming response from Dify API:', error);
    throw error;
  }
}