// Contract configuration for ProofedQuest
export const CONTRACT_ADDRESS = "CeFxPviz7ooHBWxKoUVMXerYkDu6afZhNNp7buTiJHJE";

export async function registerQuest(
  questId: string,
  skillName: string,
  aiConfidence: number = 98
) {
  try {
    const mockHash = Math.random().toString(36).substring(7);
    return {
      success: true,
      transactionHash: mockHash
    };
  } catch (error) {
    return {
      success: false,
      error: String(error)
    };
  }
}

export async function mintBadge(questId: string, rarity: string) {
  try {
    const mockHash = Math.random().toString(36).substring(7);
    const mockToken = Math.random().toString(36).substring(7);
    return {
      success: true,
      tokenAddress: mockToken,
      transactionHash: mockHash,
      explorerLink: `https://explorer.solana.com/tx/${mockHash}?cluster=devnet`
    };
  } catch (error) {
    return {
      success: false,
      error: String(error)
    };
  }
}