/**
 * x402 Payment Client
 * 
 * This is a mock implementation for testing purposes.
 */

export interface PaymentRequest {
  amount: number;
  currency: string;
  recipient: string;
  description?: string;
}

export interface PaymentResponse {
  transactionId: string;
  status: 'pending' | 'completed' | 'failed';
  timestamp: number;
}

export class X402PaymentClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.x402.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async initiatePayment(request: PaymentRequest): Promise<PaymentResponse> {
    // Mock implementation
    return {
      transactionId: `tx_${Date.now()}`,
      status: 'completed',
      timestamp: Date.now(),
    };
  }

  async getPaymentStatus(transactionId: string): Promise<PaymentResponse> {
    // Mock implementation
    return {
      transactionId,
      status: 'completed',
      timestamp: Date.now(),
    };
  }
}

export default X402PaymentClient;
