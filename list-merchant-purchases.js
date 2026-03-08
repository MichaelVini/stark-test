import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  const purchases = await starkbank.merchantPurchase.query({
    limit: 10
  });

  console.log("=== Merchant Purchases ===\n");
  
  for await (const purchase of purchases) {
    console.log({
      id: purchase.id,
      amount: purchase.amount,
      installmentCount: purchase.installmentCount,
      status: purchase.status,
      fundingType: purchase.fundingType,
      cardEnding: purchase.cardEnding,
      cardId: purchase.cardId,
      holderName: purchase.holderName,
      network: purchase.network,
      challengeUrl: purchase.challengeUrl,
      created: purchase.created,
      updated: purchase.updated,
      tags: purchase.tags
    });
    console.log("---");
  }
})();
