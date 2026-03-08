import { configureStarkUser } from "./sdk.js";

// Cole aqui o ID da compra que você quer cancelar ou reverter
// Use: node list-merchant-purchases.js para ver as compras disponíveis
const PURCHASE_ID = "5711752008302592";  // Última compra aprovada

(async () => {
  const starkbank = configureStarkUser();

  try {
    console.log("Atualizando compra:", PURCHASE_ID);
    
    // OPÇÃO 1: Cancelar compra aprovada (antes de confirmar)
    const updated = await starkbank.merchantPurchase.update(PURCHASE_ID, {
      status: "canceled",
      amount: 0
    });

    // OPÇÃO 2: Reverter compra confirmada (total) - só funciona 1 dia após confirmação
    // const updated = await starkbank.merchantPurchase.update(PURCHASE_ID, {
    //   status: "reversed",
    //   amount: 0  // Reversão total
    // });

    console.log("\nCompra atualizada:");
    console.log(JSON.stringify(updated, null, 2));
  } catch (error) {
    console.error("Erro ao atualizar compra:", error.message);
  }
})();
