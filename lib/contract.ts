export const CONTRACT_ADDRESS = "CeFxPviz7ooHBWxKoUVMXerYkDu6afZhNNp7buTiJHJE";

export const QUEST_DEFINITIONS = [
  {
    id: "lightning-coder",
    name: "Lightning Coder",
    time: "5 min",
    rarity: "Rare",
    description: "Build a React component"
  },
  {
    id: "smart-contract-sage",
    name: "Smart Contract Sage", 
    time: "15 min",
    rarity: "Epic",
    description: "Write a Solana program"
  },
  {
    id: "full-stack-king",
    name: "Full Stack King",
    time: "30 min", 
    rarity: "Legendary",
    description: "Build a complete dApp"
  }
];

export async function registerQuest(questId: string, skillName: string) {
  try {
    // This would call your Noah AI smart contract
    // For now, returns mock success
    console.log(`Quest registered: ${questId} for skill: ${skillName}`);
    return {
      success: true,
      hash: "2a1b3c4d5e6f7g8h9i0j",
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error("Error registering quest:", error);
    return { success: false, error };
  }
}

export async function mintBadge(questId: string, rarity: string) {
  try {
    // This would mint the NFT on Solana
    console.log(`Minting badge for quest ${questId} with rarity ${rarity}`);
    return {
      success: true,
      tokenAddress: "TokenMint123xyz",
      transactionHash: "5z8k2m9n3p1q4r6s7t8u",
      explorerLink: `https://explorer.solana.com/tx/5z8k2m9n3p1q4r6s7t8u?cluster=devnet`
    };
  } catch (error) {
    console.error("Error minting badge:", error);
    return { success: false, error };
  }
}
