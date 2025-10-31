import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  console.log("📋 Listando até 10 subscriptions...");

  const [subs, cursor] = await starkbank.invoicePullSubscription.page({ limit: 10 });

  for (let sub of subs) {
    console.log("------------------------");
    console.log("ID:", sub.id);
    console.log("Status:", sub.status);
    console.log("Tipo:", sub.type);
    console.log("Pull Mode:", sub.pullMode);
    console.log("Nome:", sub.name);
    console.log("TaxId:", sub.taxId);
    console.log("Início:", sub.start);
    console.log("Fim:", sub.end);
  }
})();
