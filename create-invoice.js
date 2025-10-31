import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  const invoices = await starkbank.invoice.create([
    {
      amount: 1000,                 // R$ 10,00 (em centavos)
      expiration: 1200,             // vence em 20min após "due" (se due não for enviado, conta da criação)
      name: "Cliente Teste",
      taxId: "01234567890",
      // due: "2027-05-31T02:59:59.999999+00:00",
      tags: ["sandbox-test"]
    }
  ]);

  console.log("Invoice criada:", invoices);
})();
