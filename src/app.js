/**
 * Simple Dummy Payment Gateway
 * @param {Object} details - Card number, CVV, amount
 * @returns {Promise} - Resolves on success, rejects on failure
 */
const mockPaymentGateway = (details) => {
  console.log("💳 Processing payment for: $" + details.amount);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccessful = Math.random() > 0.2;

      if (!details.cardNumber || details.cardNumber.length < 16) {
        reject({ status: 400, message: "Invalid card number." });
      } else if (isSuccessful) {
        resolve({ status: 200, transactionId: "TXN_" + Math.random().toString(36).substr(2, 9) });
      } else {
        reject({ status: 402, message: "Insufficient funds or card declined." });
      }
    }, 2000);
  });
};