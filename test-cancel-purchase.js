import { configureStarkUser } from "./sdk.js";

const CARD_ID = "5109044683472896";

(async () => {
  const starkbank = configureStarkUser();

  try {
    // 1. Criar compra
    console.log("1️⃣  Criando nova compra...");
    const purchase = await starkbank.merchantPurchase.create(
      new starkbank.MerchantPurchase({
        amount: 5000,
        installmentCount: 1,
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
        tags: ["test-cancel"]
      })
    );
    
    console.log("✅ Compra criada:", {
      id: purchase.id,
      status: purchase.status,
      amount: purchase.amount
    });

    // 2. Tentar cancelar imediatamente
    console.log("\n2️⃣  Cancelando compra...");
    const updated = await starkbank.merchantPurchase.update(purchase.id, {
      status: "canceled",
      amount: 0
    });
    
    console.log("✅ Compra cancelada:", {
      id: updated.id,
      status: updated.status,
      amount: updated.amount
    });

  } catch (error) {
    console.error("❌ Erro:", error.message);
  }
})();
