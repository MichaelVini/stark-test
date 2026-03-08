# Stark Bank Test

Projeto de integração com a API do Stark Bank.

## Configuração

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente criando um arquivo `.env`:
```
STARK_PROJECT_ID=seu-project-id
STARK_PRIVATE_KEY=sua-chave-privada
STARK_ENV=sandbox
STARK_WORKSPACE_ID=seu-workspace-id (opcional)
```

## Scripts Disponíveis

### Faturas e Assinaturas
- `create-invoice.js` - Criar faturas
- `create-subscription.js` - Criar assinaturas
- `list-invoices.js` - Listar faturas
- `list-subscriptions.js` - Listar assinaturas
- `list-invoice-logs.js` - Listar logs de faturas
- `list-subscription-logs.js` - Listar logs de assinaturas

### Pull Requests
- `pull-request.js` - Gerenciar pull requests
- `list-pull-requests.js` - Listar pull requests
- `list-pull-request-logs.js` - Listar logs de pull requests

### Webhooks
- `create-webhook.js` - Criação de webhooks
- `list-webhooks.js` - Listagem de webhooks

### Pagamentos com Cartão de Crédito
- `create-merchant-session.js` - Criar sessão segura para pagamento
- `create-merchant-session-purchase.js` - Criar compra via sessão
- `create-merchant-purchase.js` - Criar compra com cartão salvo (✅ Aprovado!)
- `list-merchant-sessions.js` - Listar sessões criadas
- `list-merchant-purchases.js` - Listar compras realizadas
- `list-merchant-cards.js` - Listar cartões salvos
- `list-merchant-installments.js` - Listar parcelas de compras
- `update-merchant-purchase.js` - Cancelar ou reverter compras
- `test-merchant-flow.js` - Teste completo automatizado
- `test-cancel-purchase.js` - Teste de cancelamento

## Uso

Execute os scripts com Node.js:
```bash
node nome-do-script.js
```

### Exemplos

#### Teste rápido de pagamentos com cartão:
```bash
# Teste completo automatizado
node test-merchant-flow.js

# Ou teste individual de cancelamento
node test-cancel-purchase.js
```

#### Criar e gerenciar compras:
```bash
# 1. Criar sessão
node create-merchant-session.js

# 2. Criar compra com cartão salvo
node create-merchant-purchase.js

# 3. Listar compras
node list-merchant-purchases.js
```

## Documentação Adicional

- `README-MERCHANT.md` - Guia completo de pagamentos com cartão de crédito
- `STATUS-MERCHANT.md` - Status dos testes e resultados
