import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  const installments = await starkbank.merchantInstallment.query({
    limit: 10
  });

  console.log("=== Merchant Installments ===\n");
  
  for await (const installment of installments) {
    console.log({
      id: installment.id,
      purchaseId: installment.purchaseId,
      amount: installment.amount,
      fee: installment.fee,
      due: installment.due,
      status: installment.status,
      fundingType: installment.fundingType,
      network: installment.network,
      transactionIds: installment.transactionIds,
      created: installment.created,
      updated: installment.updated,
      tags: installment.tags
    });
    console.log("---");
  }
})();
