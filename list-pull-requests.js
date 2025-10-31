import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  console.log("📋 Listando até 10 Pull Requests...");

  const [pullRequests, cursor] = await starkbank.invoicePullRequest.page({ limit: 10 });

  pullRequests.forEach((pr) => {
    console.log("------------------------");
    console.log("ID:", pr.id);
    console.log("InvoiceId:", pr.invoiceId);
    console.log("SubscriptionId:", pr.subscriptionId);
    console.log("Status:", pr.status); // ex.: created, processing, paid, failed
    console.log("Tentativa:", pr.attemptType);
    console.log("Due:", pr.due);
    console.log("Tags:", pr.tags);
  });

  console.log("Cursor para próxima página:", cursor);
})();
