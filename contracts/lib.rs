use anchor_lang::prelude::*;

declare_id!("11111111111111111111111111111111");

#[program]
pub mod proofed_quest {
    use super::*;

    pub fn register_quest(
        ctx: Context<RegisterQuest>,
        quest_id: String,
        skill_name: String,
        ai_confidence: u8,
    ) -> Result<()> {
        let quest = &mut ctx.accounts.quest;
        quest.builder = ctx.accounts.builder.key();
        quest.quest_id = quest_id;
        quest.skill_name = skill_name;
        quest.ai_confidence = ai_confidence;
        quest.timestamp = Clock::get()?.unix_timestamp;
        Ok(())
    }

    pub fn mint_badge(ctx: Context<MintBadge>, rarity: u8) -> Result<()> {
        let badge = &mut ctx.accounts.badge;
        badge.builder = ctx.accounts.builder.key();
        badge.rarity = rarity;
        badge.minted_at = Clock::get()?.unix_timestamp;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct RegisterQuest<'info> {
    #[account(init, payer = builder, space = 256)]
    pub quest: Account<'info, QuestRecord>,
    #[account(mut)]
    pub builder: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct MintBadge<'info> {
    #[account(init, payer = builder, space = 256)]
    pub badge: Account<'info, BadgeRecord>,
    #[account(mut)]
    pub builder: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct QuestRecord {
    pub builder: Pubkey,
    pub quest_id: String,
    pub skill_name: String,
    pub ai_confidence: u8,
    pub timestamp: i64,
}

#[account]
pub struct BadgeRecord {
    pub builder: Pubkey,
    pub rarity: u8,
    pub minted_at: i64,
}
