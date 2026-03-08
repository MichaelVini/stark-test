import { configureStarkUser } from "./sdk.js";

// Usando um cartão já salvo
const CARD_ID = "5109044683472896";

(async () => {
  const starkbank = configureStarkUser();

  try {
    const purchase = await starkbank.merchantPurchase.create(
      new starkbank.MerchantPurchase({
        amount: 10000,
        installmentCount: 3,
        cardId: CARD_ID,
        holderEmail: "teste@starkbank.com",
        holderPhone: "11999999999",
        fundingType: "credit",
        challengeMode: "disabled",
        billingCountryCode: "BRA",
        billingCity: "Sao Paulo",
        billingStateCode: "SP",
        billingStreetLine1: "Rua Teste, 123",
        billingStreetLine2: "Apto 1",
        billingZipCode: "01310-100",
        metadata: {
          userAgent: "Mozilla/5.0",
          userIp: "177.11.11.11",
          language: "pt-BR",
          timezoneOffset: 3
        },
        tags: ["purchase-test"]
      })
    );

    console.log("Merchant Purchase criada:");
    console.log(JSON.stringify(purchase, null, 2));
  } catch (error) {
    console.error("Erro ao criar compra:", error.message);
  }
})();
