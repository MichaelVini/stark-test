# Guia de Pagamentos com Cartão de Crédito - Stark Bank

## 📋 Visão Geral

A Stark Bank oferece dois métodos principais para processar pagamentos com cartão de crédito:

1. **Merchant Session** - Para coletar dados do cartão de forma segura (primeira compra)
2. **Merchant Purchase** - Para cobrar cartões já salvos (compras recorrentes)

## 🔄 Fluxo de Pagamento

### Primeira Compra (Merchant Session)

```
1. Criar Merchant Session → 2. Cliente preenche dados do cartão → 3. Criar Purchase via Session → 4. Cartão é salvo
```

### Compras Subsequentes (Merchant Purchase)

```
1. Usar cardId salvo → 2. Criar Merchant Purchase diretamente
```

## 🚀 Arquivos Criados

### 1. **create-merchant-session.js**
Cria uma sessão para coletar dados do cartão com segurança.
```bash
node create-merchant-session.js
```
**Importante:** Salve o UUID retornado para usar no próximo passo!

### 2. **create-merchant-session-purchase.js**
Cria uma compra usando o UUID da sessão criada.
- Edite o arquivo e cole o UUID da sessão
- Use cartões de teste para Sandbox
```bash
node create-merchant-session-purchase.js
```

### 3. **create-merchant-purchase.js**
Cria compras diretas usando um cardId já salvo.
- Requer um cardId de cartão já aprovado
```bash
node create-merchant-purchase.js
```

### 4. **list-merchant-sessions.js**
Lista todas as sessões criadas.
```bash
node list-merchant-sessions.js
```

### 5. **list-merchant-purchases.js**
Lista todas as compras realizadas.
```bash
node list-merchant-purchases.js
```

### 6. **list-merchant-cards.js**
Lista todos os cartões salvos.
```bash
node list-merchant-cards.js
```

### 7. **list-merchant-installments.js**
Lista as parcelas das compras parceladas.
```bash
node list-merchant-installments.js
```

### 8. **update-merchant-purchase.js**
Cancela ou reverte uma compra.
```bash
node update-merchant-purchase.js
```

## 💳 Cartões de Teste (Sandbox)

### Mastercard
- **Número:** 5277696455399733
- **CVV:** 123
- **Validade:** Qualquer data futura (ex: 2035-01)

### Visa
- **Número:** 4532123456789000
- **CVV:** 123
- **Validade:** Qualquer data futura

## 📊 Status das Compras

| Status | Descrição |
|--------|-----------|
| `created` | Compra criada, aguardando processamento |
| `approved` | Compra aprovada pelo emissor |
| `denied` | Compra negada pelo emissor |
| `confirmed` | Compra confirmada, valor será liquidado |
| `paid` | Valor liquidado na conta |
| `pending` | Aguardando ação (ex: 3DS) |
| `canceled` | Compra cancelada antes de ser processada |
| `voided` | Compra completamente revertida |

## 🔐 3D Secure (3DS)

O 3DS adiciona uma camada extra de segurança:

- **Desabilitado** (`challengeMode: "disabled"`): Mais rápido, ideal para testes
- **Habilitado** (`challengeMode: "enabled"`): Mais seguro, requer verificação do cliente

Quando habilitado, você receberá um `challengeUrl` onde o cliente deve completar a verificação.

## 💰 Valores e Parcelamento

Valores são sempre em **centavos**:
- R$ 10,00 = 1000
- R$ 100,00 = 10000
- R$ 1.234,56 = 123456

**Parcelamento** em `allowedInstallments`:
```javascript
{
  totalAmount: 5000,  // Valor total que o cliente pagará
  count: 1            // Número de parcelas
}
```

## 🔄 Operações de Reversão

### Cancelar Compra Aprovada (antes de confirmar)
```javascript
{
  status: "canceled",
  amount: 0
}
```

### Reverter Compra Confirmada
```javascript
{
  status: "reversed",
  amount: 5000  // Valor a reverter (0 = reversão total)
}
```

## 📝 Campos Obrigatórios

### Merchant Session Purchase
- amount
- cardNumber, cardExpiration, cardSecurityCode
- holderName
- fundingType ("credit" ou "debit")

### Merchant Purchase (cartão salvo)
- amount
- cardId
- fundingType
- holderEmail (se 3DS habilitado)
- holderPhone (se 3DS habilitado)
- billingAddress (se 3DS habilitado)

## 🎯 Próximos Passos

1. **Teste o fluxo básico:**
   ```bash
   # 1. Crie uma sessão
   node create-merchant-session.js
   
   # 2. Use o UUID para criar uma compra
   # (edite o arquivo antes)
   node create-merchant-session-purchase.js
   
   # 3. Liste as compras
   node list-merchant-purchases.js
   
   # 4. Liste os cartões salvos
   node list-merchant-cards.js
   ```

2. **Explore compras recorrentes:**
   - Use o cardId obtido para criar compras diretas
   - Teste diferentes valores e parcelamentos

3. **Teste reversões:**
   - Crie uma compra
   - Cancele ou reverta usando o purchaseId

## 📚 Documentação Completa

- [API Reference - Merchant Session](https://starkbank.com/docs/api#merchant-session)
- [API Reference - Merchant Purchase](https://starkbank.com/docs/api#merchant-purchase)
- [API Reference - Merchant Card](https://starkbank.com/docs/api#merchant-card)
