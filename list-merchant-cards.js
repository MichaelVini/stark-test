import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  const cards = await starkbank.merchantCard.query({
    limit: 10
  });

  console.log("=== Merchant Cards ===\n");
  
  for await (const card of cards) {
    console.log({
      id: card.id,
      holderName: card.holderName,
      ending: card.ending,
      expiration: card.expiration,
      network: card.network,
      fundingType: card.fundingType,
      status: card.status,
      created: card.created,
      updated: card.updated,
      tags: card.tags
    });
    console.log("---");
  }
})();
