const DEFAULT_CUSTOM_BETS = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323, 4782969];

function getMartingaleBetAmount(cfg, level) {
  const safeLevel = Math.max(1, Number(level) || 1);
  const index = safeLevel - 1;

  const customBets = Array.isArray(cfg && cfg.customBets) ? cfg.customBets : [];
  const customValue = Number(customBets[index]);
  if (customBets.length > index && Number.isFinite(customValue) && customValue > 0) {
    return customValue;
  }

  return DEFAULT_CUSTOM_BETS[index] || DEFAULT_CUSTOM_BETS[DEFAULT_CUSTOM_BETS.length - 1];
}

const MARTINGALE_MULTIPLIERS = DEFAULT_CUSTOM_BETS;

function getBetSequence(cfg, maxLevels = 15) {
  const count = Math.max(1, Number(maxLevels) || 15);
  return Array.from({ length: count }, (_, index) => getMartingaleBetAmount(cfg, index + 1));
}

module.exports = {
  MARTINGALE_MULTIPLIERS,
  getMartingaleBetAmount,
  getBetSequence
};
