import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  // Substitua pelo ID do pull request que você quer consultar os logs
  const pullRequestId = "5931425144504320";

  console.log(`📋 Buscando logs do Pull Request ID: ${pullRequestId}...\n`);

  try {
    const logs = await starkbank.invoicePullRequest.log.query({
      limit: 50,
      pullRequestIds: [pullRequestId]
    });

    let count = 0;
    for await (let log of logs) {
      count++;
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("Log ID:", log.id);
      console.log("Pull Request ID:", log.pullRequest.id);
      console.log("Tipo:", log.type); // ex.: created, processing, paid, failed, etc.
      console.log("Created:", log.created);
      console.log("Errors:", log.errors || "Nenhum erro");
      console.log("Pull Request Status:", log.pullRequest.status);
      console.log("Invoice ID:", log.pullRequest.invoiceId);
      console.log("Subscription ID:", log.pullRequest.subscriptionId);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    }

    console.log(`Total de logs encontrados: ${count}`);
  } catch (error) {
    console.error("Erro ao buscar logs:", error.message);
  }
})();
