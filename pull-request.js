import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  const requests = await starkbank.invoicePullRequest.create([
    {
      attemptType: "default",
      // due opcional para a tentativa
      due: "2027-05-31T02:59:59.999999+00:00",
      invoiceId: "6343628725157888",
      subscriptionId: "5499354089521152",
      tags: ["sandbox-test-pix-auto"]
    }
  ]);

  console.log("Pull Request criado:", requests);
})();
