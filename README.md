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

- `create-invoice.js` - Criar faturas
- `create-subscription.js` - Criar assinaturas
- `list-invoices.js` - Listar faturas
- `list-subscriptions.js` - Listar assinaturas
- `list-pull-requests.js` - Listar pull requests
- `pull-request.js` - Gerenciar pull requests
- `create-webhook.js`- Criação de webhooks
- `list-webhooks.js` - Listagem de webhooks

## Uso

Execute os scripts com Node.js:
```bash
node nome-do-script.js
```
