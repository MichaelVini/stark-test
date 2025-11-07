import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  // Substitua pelo ID da invoice que você quer consultar os logs
  const invoiceId = "5680551272906752";

  console.log(`📋 Buscando logs da Invoice ID: ${invoiceId}...\n`);

  try {
    const logs = await starkbank.invoice.log.query({
      limit: 50,
      invoiceIds: [invoiceId]
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
