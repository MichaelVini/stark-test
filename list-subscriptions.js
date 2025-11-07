import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  console.log("📋 Listando até 4 subscriptions...");

  const [subs, cursor] = await starkbank.invoicePullSubscription.page({ limit: 4 });

  for (let sub of subs) {
    console.log("------------------------");
    console.log(sub);
  }
})();
