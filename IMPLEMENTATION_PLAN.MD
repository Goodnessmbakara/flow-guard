FlowGuard MVP Implementation Plan
Phase 1: Project Setup & Foundation
1.1 Project Structure Setup
Initialize monorepo structure (contracts/, frontend/, backend/, docs/)
Set up TypeScript/JavaScript tooling
Configure build tools and dependencies
Set up Git repository with proper .gitignore
Create README with setup instructions
1.2 Development Environment
Set up BCH testnet environment
Configure CHAINGRAPH for BCH indexing
Set up Layla CHIPs development tools
Configure wallet integration (Selene, mainnet.cash)
Set up testing framework for covenants
1.3 Design System Setup
Define color palette (1-3 complementary colors)
Set up design tokens (typography, spacing, colors)
Create component library structure
Set up Tailwind CSS or similar styling framework
Create reusable UI components (buttons, cards, forms)
Phase 2: Smart Contract Development (Layla CHIPs)
2.1 Core Covenant Structure
Design FlowGuard covenant architecture
Implement P2S (Pay-to-Script) covenant base
Set up covenant state structure
Define covenant parameters (signers, thresholds, caps)
2.2 Loop Module Implementation
Implement Loop-based recurring unlock mechanism
Create cycle tracking logic
Handle unlock window triggers
Implement rollover logic for unspent funds
2.3 Bitwise State Management
Design compact state integer structure
Implement bitwise encoding for:
Cycle unlock status
Cycle spend status
Proposal status (pending/approved/executed)
Create state reading/parsing utilities
2.4 Function Modules
Implement hasApproval() function
Implement isSigner() function
Implement isAllowedSpending() function
Create reusable permission check modules
Implement governance functions (addSigner, pauseVault)
2.5 Proposal & Approval Logic
Design proposal data structure
Implement proposal creation logic
Create approval tracking system
Implement threshold checking
Build payout execution logic
2.6 Vault Creation & Management
Implement vault creation covenant
Add deposit handling
Create parameter locking mechanism
Implement vault state initialization
Phase 3: Testing & Security
3.1 Unit Tests
Test Loop unlock cycles
Test proposal creation and approval
Test payout execution
Test state bitwise encoding/decoding
Test edge cases (insufficient funds, expired proposals)
3.2 Integration Tests
Test full vault creation flow
Test proposal → approval → payout flow
Test multi-signer scenarios
Test loop cycle transitions
Test error handling and edge cases
3.3 Security Audit
Review covenant logic for vulnerabilities
Test for reentrancy and race conditions
Verify bitwise state encoding correctness
Review permission checks
Document security assumptions
Phase 4: Backend API Development
4.1 API Structure
Set up Express.js or similar framework
Define REST API endpoints
Set up database schema (PostgreSQL/SQLite)
Create data models (vaults, proposals, signers, cycles)
4.2 Vault Management API
POST /api/vaults - Create vault
GET /api/vaults/:id - Get vault details
GET /api/vaults - List user's vaults
GET /api/vaults/:id/state - Get vault state
4.3 Proposal API
POST /api/vaults/:id/proposals - Create proposal
GET /api/vaults/:id/proposals - List proposals
POST /api/proposals/:id/approve - Approve proposal
GET /api/proposals/:id - Get proposal details
4.4 Cycle & State API
GET /api/vaults/:id/cycles - Get cycle history
GET /api/vaults/:id/cycles/current - Get current cycle
POST /api/vaults/:id/unlock - Trigger unlock (if needed)
4.5 Transaction Monitoring
Set up BCH transaction monitoring
Parse covenant transactions
Update vault state from on-chain data
Handle transaction confirmations
4.6 Optional: Notification Service
Set up email/push notification system
Notify on unlock windows
Notify on new proposals
Notify on approval milestones
Phase 5: Frontend Development
5.1 Project Setup
Initialize  or React app
Set up routing structure
Configure wallet connection (Selene, mainnet.cash)
Set up API client
Configure state management (Zustand/Redux)
5.2 Design System Implementation
Build reusable components (inspired by Loop Crypto)
Create layout components (header, footer, sidebar)
Implement spacing and typography system
Build responsive grid system
Create loading and error states
5.3 Dashboard Page
Build vault list view
Show vault status cards
Display quick stats (total BCH, active proposals)
Implement filtering and search
Add wallet connection UI
5.4 Vault Creation Wizard
Step 1: Basic info (name, description)
Step 2: Deposit amount
Step 3: Unlock schedule (Loops configuration)
Step 4: Signers and threshold
Step 5: Spending caps (optional)
Step 6: Review and confirm
Handle wallet transaction signing
5.5 Vault Detail Page
Display vault overview
Show current cycle status
Display unlocked vs locked funds
Show active proposals
Display transaction history
Add "Create Proposal" button
5.6 Proposal Interface
Create proposal form (recipient, amount, reason)
Proposal list view (pending, approved, executed)
Proposal detail view
Approval interface (for signers)
Transaction status indicators
On-chain transaction links
5.7 State & Analytics View
Visualize cycle timeline
Show bitwise state breakdown
Display spending analytics
Show approval history
Add export functionality
5.8 Footer Implementation
Design footer (inspired by Safe.global)
Add navigation links
Add social links
Add legal links (Terms, Privacy)
Add copyright and branding
5.9 Responsive Design
Mobile-first approach
Tablet optimization
Desktop layout
Touch-friendly interactions
Mobile wallet integration
Phase 6: Wallet Integration
6.1 Selene Wallet Integration
Set up Selene wallet connector
Implement transaction signing
Handle wallet connection/disconnection
Support for signing proposals
Support for vault creation transactions
6.2 Mainnet.cash Integration
Set up mainnet.cash wallet connector
Implement alternative wallet flow
Handle different wallet APIs
Test cross-wallet compatibility
6.3 Transaction Handling
Build transaction builder
Handle covenant transaction construction
Implement transaction broadcasting
Add transaction status polling
Handle transaction errors
Phase 7: Integration & Polish
7.1 End-to-End Integration
Connect frontend to backend API
Connect backend to BCH network
Test full user flows
Verify on-chain state sync
Test multi-user scenarios
7.2 UI/UX Polish
Refine spacing and typography
Add loading animations
Improve error messages
Add success confirmations
Optimize performance
7.3 Documentation
Write user documentation
Create developer docs
Document API endpoints
Create covenant documentation
Add inline code comments
7.4 Testing & QA
User acceptance testing
Cross-browser testing
Mobile device testing
Wallet compatibility testing
Performance testing
Phase 8: Deployment & Demo Prep
8.1 Backend Deployment
Set up production server
Configure environment variables
Set up database
Deploy API
Set up monitoring
8.2 Frontend Deployment
Build production bundle
Deploy to Vercel/Netlify
Configure domain
Set up CDN
Add analytics
8.3 Testnet Deployment
Deploy covenants to testnet
Test all flows on testnet
Verify transaction costs
Test with real wallets
Document testnet addresses
8.4 Demo Preparation
Prepare demo script
Create demo vaults
Prepare test scenarios
Record demo video (backup)
Create presentation slides
Key Files & Structure
flowguard/
├── contracts/
│   ├── FlowGuard.cash      # Main covenant
│   ├── loops.cash          # Loop module
│   ├── bitwise.cash        # Bitwise state module
│   ├── functions.cash      # Function modules
│   └── tests/
├── backend/
│   ├── src/
│   │   ├── api/            # API routes
│   │   ├── models/        # Data models
│   │   ├── services/      # Business logic
│   │   └── utils/         # Utilities
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # React hooks
│   │   ├── utils/         # Utilities
│   │   └── styles/        # Styling
│   └── package.json
├── docs/
│   ├── PRD.md
│   ├── API.md
│   └── ARCHITECTURE.md
└── README.md
Technology Stack
Smart Contracts: Layla CHIPs (CashScript), BCH covenants
Backend: Node.js, Express.js, PostgreSQL/SQLite
Frontend: Next.js/React, TypeScript, Tailwind CSS
Wallets: Selene, mainnet.cash
Testing: Jest, Mocha, or similar
Deployment: Vercel/Netlify (frontend), Railway/Render (backend)
Success Criteria
✅ Vault creation works end-to-end
✅ Loops trigger unlocks correctly
✅ Proposals can be created and approved
✅ Payouts execute via P2S covenant
✅ State tracked via bitwise encoding
✅ Dashboard displays all vault info
✅ Wallet integration works smoothly
✅ All MVP features functional
✅ Demo-ready for Blaze2025