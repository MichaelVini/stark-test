import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  const sessions = await starkbank.merchantSession.query({
    limit: 10
  });

  console.log("=== Merchant Sessions ===\n");
  
  for await (const session of sessions) {
    console.log({
      id: session.id,
      uuid: session.uuid,
      status: session.status,
      allowedFundingTypes: session.allowedFundingTypes,
      allowedInstallments: session.allowedInstallments,
      challengeMode: session.challengeMode,
      created: session.created,
      tags: session.tags
    });
    console.log("---");
  }
})();
