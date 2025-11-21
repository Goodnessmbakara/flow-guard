# FlowGuard Blockchain Integration Status

## Current State

### ✅ What Works NOW (Deployed)

1. **Contract Deployment**
   - Backend automatically deploys a CashScript contract to BCH chipnet when you create a vault
   - Location: `backend/src/services/vaultService.ts:21-47`
   - Contract address is saved to database: `contract_address` column

2. **Blockchain Monitoring**
   - Backend monitors contract balances every 30 seconds
   - Location: `backend/src/services/blockchain-monitor.ts`
   - Updates vault balance in database automatically

3. **What Happens When You Create a Vault:**
   ```
   1. User fills out form → Frontend sends to backend
   2. Backend generates contract with parameters (signers, threshold, etc.)
   3. Contract is deployed to BCH chipnet blockchain
   4. Contract address (like bchtest:p...) is saved to database
   5. Backend starts monitoring the contract balance
   6. Vault shows up in frontend with "On-Chain Balance" indicator
   ```

### ⚠️ What's PARTIALLY Working

1. **Contract Funding**
   - Contracts are deployed but NOT automatically funded
   - User must manually send BCH to the contract address to fund it
   - Example: Your test vault at `bchtest:pvwj657cm4wmjruparrs7c899370ldx6t3u0cyfj574rjh5mrjqajtue6w8dm` has 0.01015 BCH because it was manually funded

2. **Transaction Flow**
   - Creating a vault = contract deployment ✅
   - Funding the vault = manual (user sends BCH) ⚠️
   - Creating proposals = database only ❌
   - Approving proposals = database only ❌
   - Executing payouts = NOT implemented ❌

### ❌ What's NOT Implemented Yet

1. **On-Chain Proposals**
   - Proposals are stored in backend database only
   - They don't create blockchain transactions yet
   - Implementation ready in `backend/src/services/contract-service.ts:317-530`

2. **On-Chain Approvals**
   - Approvals are tracked in database only
   - No blockchain signatures required yet

3. **Payout Execution**
   - Cannot actually send BCH from vaults yet
   - Requires multi-sig transaction building

4. **Wallet Integration for Signing**
   - Frontend doesn't prompt for wallet signatures
   - Would need Paytaca/Badger wallet integration for signing

## What You're Seeing

### Old Vaults (`vault_1763682107204_*`)
- Created BEFORE name/description fields were added
- No custom name → shows ugly auto-generated ID
- These vaults might NOT have contract addresses (depends when created)

### New Vault (if not showing)
Possible reasons:
1. **Check backend logs** - Contract deployment might have failed
2. **Database issue** - Vault might be created but not returned by API
3. **Frontend cache** - Try hard refresh (Ctrl+Shift+R)

## How to Verify Blockchain Integration

```bash
# Check if your vault has a contract address
curl https://flow-guard.fly.dev/api/vaults -H "x-user-address: YOUR_ADDRESS" | jq '.all[] | {name, contractAddress, balance}'

# Check specific vault
curl https://flow-guard.fly.dev/api/vaults/VAULT_ID -H "x-user-address: YOUR_ADDRESS" | jq '{name, contractAddress, balance}'
```

## Next Steps to Complete On-Chain Transactions

1. **Enable Wallet Signing** - Add Paytaca wallet signature requests
2. **Implement Proposal Transactions** - Call `createOnChainProposal()`
3. **Implement Approval Signatures** - Call `createOnChainApproval()`
4. **Implement Payout Execution** - Build and broadcast multi-sig transactions
5. **Add Transaction History** - Track all on-chain transactions

## For Hackathon Demo

**Currently Working:**
- ✅ Contract deployment to chipnet
- ✅ Balance monitoring
- ✅ Database-backed proposals/approvals
- ✅ Multi-signer configuration

**For Demo:**
Show that contracts ARE deployed to blockchain (provide explorer links), but full transaction signing needs wallet integration work.
