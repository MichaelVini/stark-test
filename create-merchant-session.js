import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  const merchantSession = await starkbank.merchantSession.create(
    new starkbank.MerchantSession({
      allowedFundingTypes: ["credit", "debit"],
      allowedInstallments: [
        { totalAmount: 5000, count: 1 },
        { totalAmount: 5500, count: 2 },
        { totalAmount: 6000, count: 3 }
      ],
      expiration: 3600,
      challengeMode: "disabled",
      tags: ["test-session"]
    })
  );

  console.log("Merchant Session criada:");
  console.log(JSON.stringify(merchantSession, null, 2));
  
  console.log("\n=== IMPORTANTE: Salve este UUID para criar compras ===");
  console.log("UUID:", merchantSession.uuid);
})();
