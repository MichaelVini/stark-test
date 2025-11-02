import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  console.log("Listando webhooks...\n");

  const webhooks = await starkbank.webhook.query({
    limit: 10
  });

  for await (let webhook of webhooks) {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("ID:", webhook.id);
    console.log("URL:", webhook.url);
    console.log("Subscriptions:", webhook.subscriptions.join(", "));
    console.log("Status:", webhook.status || "active");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
  }
})();
