import { X402PaymentClient, PaymentRequest } from './index';

describe('X402PaymentClient', () => {
  let client: X402PaymentClient;

  beforeEach(() => {
    client = new X402PaymentClient('test-api-key');
  });

  describe('initiatePayment', () => {
    it('should initiate a payment successfully', async () => {
      const request: PaymentRequest = {
        amount: 100,
        currency: 'USD',
        recipient: 'test-recipient',
        description: 'Test payment',
      };

      const response = await client.initiatePayment(request);

      expect(response.transactionId).toBeDefined();
      expect(response.status).toBe('completed');
      expect(response.timestamp).toBeDefined();
    });
  });

  describe('getPaymentStatus', () => {
    it('should get payment status', async () => {
      const transactionId = 'tx_12345';
      const response = await client.getPaymentStatus(transactionId);

      expect(response.transactionId).toBe(transactionId);
      expect(response.status).toBe('completed');
    });
  });
});
