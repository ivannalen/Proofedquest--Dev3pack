// Contract configuration for ProofedQuest
export const CONTRACT_ADDRESS = "CeFxPviz7ooHBWxKoUVMXerYkDu6afZhNNp7buTiJHJE";

// Quest definitions
export const QUESTS = [
  {
    id: "lightning-coder",
    name: "Lightning Coder",
    time: "5 min",
    rarity: "Rare",
    description: "Build a React component",
    reward: "500 XP",
    difficulty: "⭐"
  },
  {
    id: "smart-contract-sage",
    name: "Smart Contract Sage",
    time: "15 min",
    rarity: "Epic",
    description: "Write a Solana program",
    reward: "1000 XP",
    difficulty: "⭐⭐"
  },
  {
    id: "full-stack-king",
    name: "Full Stack King",
    time: "30 min",
    rarity: "Legendary",
    description: "Build a complete dApp",
    reward: "2000 XP",
    difficulty: "⭐⭐⭐"
  }
];

// Badge definitions
export const BADGES = [
  {
    name: "Frontend Warrior",
    skill: "React Mastery",
    xp: 1200,
    rarity: "Legendary",
    value: "$80"
  },
  {
    name: "API Architect",
    skill: "API Design",
    xp: 800,
    rarity: "Epic",
    value: "$30"
  },
  {
    name: "React Ranger",
    skill: "React Basics",
    xp: 400,
    rarity: "Rare",
    value: "$10"
  }
];

// Function to register a quest on the contract
export async function registerQuest(
  questId: string,
  skillName: string,
  aiConfidence: number
): Promise<{
  success: boolean;
  transactionHash?: string;
  error?: string;
}> {
  try {
    console.log(`Registering quest: ${questId} for skill: ${skillName}`);
    console.log(`GenLayer AI Confidence: ${aiConfidence}%`);
    
    // This would call the Noah AI smart contract
    // For now, returns mock success
    const mockHash = `${Math.random().toString(36).substring(7)}`;
    
    return {
      success: true,
      transactionHash: mockHash
    };
  } catch (error) {
    console.error("Error registering quest:", error);
    return {
      success: false,
      error: String(error)
    };
  }
}

// Function to mint a badge NFT
export async function mintBadge(
  questId: string,
  rarity: string
): Promise<{
  success: boolean;
  tokenAddress?: string;
  transactionHash?: string;
  explorerLink?: string;
  error?: string;
}> {
  try {
    console.log(`Minting badge for quest: ${questId} with rarity: ${rarity}`);
    
    // This would call the Noah AI smart contract to mint on Solana
    // For now, returns mock success
    const mockHash = `${Math.random().toString(36).substring(7)}`;
    const mockToken = `${Math.random().toString(36).substring(7)}`;
    
    return {
      success: true,
      tokenAddress: mockToken,
      transactionHash: mockHash,
      explorerLink: `https://explorer.solana.com/tx/${mockHash}?cluster=devnet`
    };
  } catch (error) {
    console.error("Error minting badge:", error);
    return {
      success: false,
      error: String(error)
    };
  }
}
