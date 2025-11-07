import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  // Substitua pelo ID da subscription que você quer consultar os logs
  const subscriptionId = "5820195931160576";

  console.log(`📋 Buscando logs da Subscription ID: ${subscriptionId}...\n`);

  try {
    const logs = await starkbank.invoicePullSubscription.log.query({
      limit: 50,
      subscriptionIds: [subscriptionId]
    });

    let count = 0;
    for await (let log of logs) {
      count++;
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log(log);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    }

    console.log(`Total de logs encontrados: ${count}`);
  } catch (error) {
    console.error("Erro ao buscar logs:", error.message);
  }
})();
