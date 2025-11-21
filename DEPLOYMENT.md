# Backend Deployment Guide - fly.io

## Quick Deploy

```bash
cd backend

# Install flyctl if not installed
curl -L https://fly.io/install.sh | sh

# Login to fly.io
fly auth login

# Launch app (first time only)
fly launch

# Create volume for database
fly volumes create flowguard_db --size 1

# Set environment secrets
fly secrets set BCH_NETWORK=chipnet

# Deploy
fly deploy
```

## API Endpoints (Production)

Once deployed, your API will be at: `https://flowguard-backend.fly.dev`

**Endpoints:**
- `GET /health` - Health check
- `GET /api` - API info
- `GET /api/vaults?creator=ADDRESS` - Get vaults
- `POST /api/vaults` - Create vault
- `GET /api/vaults/:id` - Get vault details
- `GET /api/vaults/:id/proposals` - Get proposals
- `POST /api/vaults/:id/proposals` - Create proposal
- `POST /api/proposals/:id/approve` - Approve proposal

## Update Frontend API URL

After deployment, update frontend API URL:

```typescript
// frontend/src/api/config.ts (create this file)
export const API_URL = import.meta.env.PROD
  ? 'https://flowguard-backend.fly.dev'
  : 'http://localhost:3001';
```

Then use in API files:
```typescript
import { API_URL } from './config';

const response = await fetch(`${API_URL}/api/vaults`);
```

## Database Persistence

Database is stored in fly.io volume at `/data/flowguard.db`
- Persists between deployments
- Backed up automatically

## Monitoring

```bash
# View logs
fly logs

# Check app status
fly status

# Open app in browser
fly open
```
