import { configureStarkUser } from "./sdk.js";

// UUID da sessão criada
const SESSION_UUID = "58ea8fc87e5c4d5c814c44fc695dbf2f";

(async () => {
  const starkbank = configureStarkUser();

  try {
    const purchase = await starkbank.merchantSession.purchase(
      SESSION_UUID,
      {
        amount: 5000,
        installmentCount: 1,
        cardNumber: "5277696455399733",
        cardExpiration: "2035-01",
        cardSecurityCode: "123",
        holderName: "Teste Stark Bank",
        holderEmail: "teste@starkbank.com",
        holderPhone: "11999999999",
        fundingType: "credit",
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
        }
      }
    );

    console.log("Compra criada via Merchant Session:");
    console.log(JSON.stringify(purchase, null, 2));
  } catch (error) {
    console.error("Erro ao criar compra:", error.message);
  }
})();
