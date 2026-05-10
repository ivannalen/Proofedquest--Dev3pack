# ProofedQuest

**Web3 Skill Verification Game | Built in 24 Hours**

## 🎮 Live Demo
👉 **[Play ProofedQuest](https://v0-proofedquest-landing-page.vercel.app/)**

---

## 📋 Project Overview

ProofedQuest is a gamified Web3 platform that solves the broken hiring problem:

**Problem:** Resumes are fake. Interviews don't prove skills. Companies guess.

**Solution:** Complete real skill quests → Get validated by GenLayer AI → Mint proof badges as NFTs on Solana → Get recruited by guilds.

---

## 🔗 Smart Contract

- **Network:** Solana Devnet
- **Program Address:** `CeFxPviz7ooHBWxKoUVMXerYkDu6afZhNNp7buTiJHJE`
- **Framework:** Anchor (Rust)
- **Deployment Tool:** Noah AI
- **Code:** `/contracts`

**View on Solana Explorer:**
https://explorer.solana.com/address/CeFxPviz7ooHBWxKoUVMXerYkDu6afZhNNp7buTiJHJE?cluster=devnet

---

## 🛠️ Tech Stack

| Component | Technology | Link |
|-----------|-----------|------|
| **Frontend** | V0 (Next.js) + Vercel | [V0.app](https://v0.app) |
| **Smart Contract** | Noah AI + Anchor (Rust) | [Noah AI](https://trynoah.ai) |
| **Blockchain** | Solana Devnet | [Solana](https://solana.com) |
| **AI Validation** | GenLayer | [GenLayer](https://genalayer.com) |
| **Hosting** | Vercel | [Vercel](https://vercel.com) |

---

## 🤝 Built With Hackathon Partners

This project showcases integration of multiple Web3 platforms and AI tools:

- **[V0 by Vercel](https://v0.app)** - AI-powered UI generation for beautiful frontend
- **[Noah AI](https://trynoah.ai)** - One-click smart contract deployment to Solana
- **[Solana](https://solana.com)** - Fast, low-cost blockchain for NFT minting
- **[GenLayer](https://genalayer.com)** - AI-powered validation layer for proof verification


Noah AI code: https://trynoah.ai/shared/69ff4cffc813b8511229cb28 

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Git

### Installation

```bash
# Clone the repo
git clone https://github.com/ivannalen/Proofedquest--Dev3pack.git
cd Proofedquest--Dev3pack

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 📱 Smart Contract Details

### Deployment with Noah AI

The Solana smart contract was deployed using Noah AI's one-click deployment:

1. Created Anchor program in Noah AI
2. Configured for Solana Devnet
3. Deployed with automatic environment setup
4. Got contract address: `CeFxPviz7ooHBWxKoUVMXerYkDu6afZhNNp7buTiJHJE`

### Contract Functions

#### `register_quest`
Registers a quest completion with GenLayer validation.

**Parameters:**
- `quest_id: String` - Quest identifier
- `skill_name: String` - Skill being proven
- `ai_confidence: u8` - Confidence score (0-100)

#### `mint_badge`
Mints an NFT proof badge to the builder.

**Parameters:**
- `rarity: u8` - Badge rarity (1=Rare, 2=Epic, 3=Legendary)

### View Contract

```bash
# View on Solana Explorer
https://explorer.solana.com/address/CeFxPviz7ooHBWxKoUVMXerYkDu6afZhNNp7buTiJHJE?cluster=devnet

# View transactions
https://explorer.solana.com/tx/[TRANSACTION_HASH]?cluster=devnet
```

---

## 🎮 How It Works

### User Flow

1. **Connect Wallet** - User connects Solana wallet (Phantom, Magic Eden, Saga)
2. **Select Quest** - Choose a skill challenge
   - ⚡ Lightning Coder (5 min) - Frontend challenge
   - 🔥 Smart Contract Sage (15 min) - Blockchain challenge
   - 👑 Full Stack King (30 min) - Complete dApp challenge
3. **Complete Task** - Build/code/solve the challenge
4. **GenLayer Validates** - AI validates work with confidence score
5. **Mint Badge** - Proof badge NFT mints on Solana Devnet
6. **Trade or Recruit** - Badge can be traded or used for guild recruitment

### Badge Rarity System

- **Legendary** ⭐⭐⭐ - 95%+ AI confidence
- **Epic** ⭐⭐ - 80-95% AI confidence
- **Rare** ⭐ - <80% AI confidence

---

## 📊 Deployments

| Component | URL |
|-----------|-----|
| **Live Frontend** | https://v0-proofedquest-landing-page.vercel.app/ |
| **GitHub Repository** | https://github.com/ivannalen/Proofedquest--Dev3pack |
| **Smart Contract** | Solana Devnet - CeFxPviz7ooHBWxKoUVMXerYkDu6afZhNNp7buTiJHJE |

---

## 🎓 Hackathon Info

**Event:** Dev3pack Global Hackathon 2026  
**Category:** Gaming  
**Duration:** 24 Hours  
**Build Date:** May 8-10, 2026  

**Partners Used:**
- ✅ V0 (UI Generation)
- ✅ Noah AI (Smart Contracts)
- ✅ Solana (Blockchain)
- ✅ GenLayer (AI Validation)

---

## 🔐 Environment Variables

For local development, create a `.env.local` file:

```env
NEXT_PUBLIC_SOLANA_CONTRACT_ADDRESS=CeFxPviz7ooHBWxKoUVMXerYkDu6afZhNNp7buTiJHJE
NEXT_PUBLIC_SOLANA_NETWORK=devnet
```

---

## 📝 Architecture

### Frontend (V0 + Next.js)
- Built with V0's AI-powered UI generation
- Responsive design for mobile and desktop
- Wallet integration for Solana
- Real-time leaderboard updates

### Smart Contract (Anchor + Solana)
- Deployed via Noah AI's platform
- Quest registration and tracking
- NFT badge minting
- Rarity-based scoring

### Validation (GenLayer AI)
- AI-powered proof validation
- Confidence score calculation
- Integration with Solana contract

---

## 🚀 Future Roadmap

- [ ] Mainnet deployment
- [ ] Mobile app (Solana Mobile Saga support)
- [ ] Trading marketplace for badges
- [ ] Guild/company profiles
- [ ] Advanced quest types
- [ ] Integration with job boards

---

## 👨‍💻 Author

**ivannalen** - Built during Dev3pack Hackathon

---

## 📄 License

MIT

---

## 🙏 Acknowledgments

- **V0 by Vercel** - For amazing UI generation
- **Noah AI** - For one-click smart contract deployment
- **Solana Foundation** - For the blockchain infrastructure
- **GenLayer** - For AI validation capabilities
- **Dev3pack** - For organizing the hackathon

---

## 📞 Support

For questions or issues:
1. Check the [GitHub Issues](https://github.com/ivannalen/Proofedquest--Dev3pack/issues)
2. Review the [Live Demo](https://v0-proofedquest-landing-page.vercel.app/)
3. View the [Smart Contract](https://explorer.solana.com/address/CeFxPviz7ooHBWxKoUVMXerYkDu6afZhNNp7buTiJHJE?cluster=devnet)

---

**Built with ❤️** ⚔️

