import { configureStarkUser } from "./sdk.js";

(async () => {
  const starkbank = configureStarkUser();

  // URL que receberá as notificações do webhook
  // Substitua pela sua URL real (pode usar ngrok, webhook.site, etc)
  const webhookUrl = "https://mammoth-hair-99.webhook.cool";

  // Eventos disponíveis para subscrição:
  // [acquiring-card, acquiring-contract-chunk, acquiring-contract-request, acquiring-factoring-contract, acquiring-installment, acquiring-purchase, acquiring-scheduled-factoring-contract, asset-block-request, asset-transfer-request, boleto, boleto-holmes, boleto-payment, brcode-payment, business-holmes, business-identity, card, card-billing-invoice, card-invoice, card-token, cip-card-receivable-contract-chunk, corporate-card, corporate-purchase, credit-block, credit-holmes, credit-note, credit-payment, credit-request, customer-relationship, customer-report, darf-payment, delivery, deposit, document, embossing-request, embossing-stock, external-card-dispute, inbound-email, individual-holmes, individual-identity, invoice, invoice-pull-installment, invoice-pull-request, invoice-pull-subscription, issuing-card, issuing-deposit, issuing-embossing-request, issuing-invoice, issuing-purchase, issuing-rule-update, issuing-stock, issuing-token, jud-file, ledger, merchant-card, merchant-card-dispute, merchant-contract-request, merchant-factoring-contract, merchant-installment, merchant-purchase, merchant-scheduled-factoring-contract, open-authorization, open-authorization-redirect, open-payment, open-payment-request, payment-request, phone-call, pix-chargeback, pix-claim, pix-infraction, pix-key, pix-key-holmes, pix-pull-request, pix-pull-subscription, pix-request.in, pix-request.out, pix-reversal.in, pix-reversal.out, processor-message, shop-cart, shop-cart-item, signer, split, sta-file-download.ccs, sta-file-download.jud, sta-file-download.svr, sta-file-upload.ccs, sta-file-upload.jud, sta-file-upload.svr, starkcode, starkcode-payment, str-bacen-payment, str-bacen-payment-request, str-ted-request.in, str-ted-request.out, str-ted-reversal.in, str-ted-reversal.out, tax-id-holmes, tax-payment, transfer, utility-payment, verified-account]

  const webhook = await starkbank.webhook.create({
    url: webhookUrl,
    subscriptions: [
      "invoice",
      "transfer",
      "deposit",
      "invoice-pull-subscription",
      "invoice-pull-request"
    ]
  });

  console.log("Webhook criado com sucesso!\n");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("ID:", webhook.id);
  console.log("URL:", webhook.url);
  console.log("Subscriptions:", webhook.subscriptions.join(", "));
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
})();
