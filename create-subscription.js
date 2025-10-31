import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  const subscriptions = await starkbank.invoicePullSubscription.create([
    {
      amount: 100, // em centavos
      displayDescription: "Teste Assinatura",
      referenceCode: "ref-12345",
      start: "2025-11-01",
      end: "2026-12-01",
      data: {
        amount: 100
      },
      interval: "month", // day|week|month
      pullMode: "automatic", // automatic|manual
      pullRetryLimit: 3,
      name: "Cliente Teste",
      taxId: "01234567890",
      type: "paymentAndOrQrcode" // qrcode|push|qrcodeAndPayment|paymentAndOrQrcode
    }
  ]);

  console.log("Subscription criada:", subscriptions);
})();
