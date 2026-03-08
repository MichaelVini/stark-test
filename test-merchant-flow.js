import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  console.log("=== TESTE COMPLETO DO FLUXO MERCHANT ===\n");

  try {
    // 1. Criar Merchant Session
    console.log("1️⃣  Criando Merchant Session...");
    const session = await starkbank.merchantSession.create(
      new starkbank.MerchantSession({
        allowedFundingTypes: ["credit", "debit"],
        allowedInstallments: [
          { totalAmount: 5000, count: 1 },
          { totalAmount: 5500, count: 2 }
        ],
        expiration: 3600,
        challengeMode: "disabled",
        tags: ["test-flow"]
      })
    );
    console.log("✅ Session criada! UUID:", session.uuid);
    console.log();

    // 2. Criar compra via Session
    console.log("2️⃣  Criando compra via Merchant Session...");
    const sessionPurchase = await starkbank.merchantSession.purchase(
      session.uuid,
      {
        amount: 5000,
        installmentCount: 1,
        cardNumber: "5277696455399733",
        cardExpiration: "2035-01",
        cardSecurityCode: "123",
        holderName: "Teste Flow",
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
    console.log("✅ Compra via session:", {
      id: sessionPurchase.id,
      status: sessionPurchase.status,
      amount: sessionPurchase.amount,
      cardEnding: sessionPurchase.cardEnding
    });
    console.log();

    // 3. Listar cartões salvos
    console.log("3️⃣  Listando cartões salvos...");
    const cards = await starkbank.merchantCard.query({ limit: 3 });
    let savedCardId = null;
    
    for await (const card of cards) {
      if (card.status === "active") {
        console.log("💳 Cartão encontrado:", {
          id: card.id,
          ending: card.ending,
          holderName: card.holderName
        });
        savedCardId = card.id;
        break;
      }
    }
    console.log();

    // 4. Se tiver cartão salvo, criar compra direta
    if (savedCardId) {
      console.log("4️⃣  Criando compra com cartão salvo...");
      const directPurchase = await starkbank.merchantPurchase.create(
        new starkbank.MerchantPurchase({
          amount: 15000,
          installmentCount: 2,
          cardId: savedCardId,
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
          tags: ["test-direct-purchase"]
        })
      );
      console.log("✅ Compra direta criada:", {
        id: directPurchase.id,
        status: directPurchase.status,
        amount: directPurchase.amount,
        installmentCount: directPurchase.installmentCount
      });
      console.log();

      // 5. Listar parcelas da compra
      console.log("5️⃣  Listando parcelas da compra...");
      const installments = await starkbank.merchantInstallment.query({
        limit: 10
      });
      
      let count = 0;
      for await (const installment of installments) {
        if (installment.purchaseId === directPurchase.id) {
          count++;
          console.log(`📅 Parcela ${count}:`, {
            amount: `R$ ${(installment.amount / 100).toFixed(2)}`,
            fee: `R$ ${(installment.fee / 100).toFixed(2)}`,
            due: installment.due,
            status: installment.status
          });
        }
      }
    }

    console.log("\n✅ TESTE COMPLETO FINALIZADO COM SUCESSO!");
    
  } catch (error) {
    console.error("❌ Erro:", error.message);
  }
})();
