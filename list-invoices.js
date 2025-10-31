import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  console.log("📋 Listando até 10 invoices...");

  const [invoices, cursor] = await starkbank.invoice.page({ limit: 10 });

  invoices.forEach((inv) => {
    console.log("------------------------");
    console.log("ID:", inv.id);
    console.log("Status:", inv.status);
    console.log("Valor:", inv.amount / 100, "BRL"); 
    console.log("Nome:", inv.name);
    console.log("TaxId:", inv.taxId);
    console.log("Vencimento:", inv.due);
    console.log("Tags:", inv.tags);
  });

  console.log("Cursor para próxima página:", cursor);
})();
