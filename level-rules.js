const LEVEL_RULES = {
  1: { type: 'none' },
  2: { type: 'watch', lossesRequired: 1 },
  3: { type: 'watch', lossesRequired: 3 },
  4: { type: 'watch', lossesRequired: 3 },
  5: { type: 'skip', skipPeriods: 3 },
  6: { type: 'watch', lossesRequired: 4 },
  7: { type: 'watch', lossesRequired: 4 },
  8: { type: 'skip', skipPeriods: 7 },
  9: { type: 'watch', lossesRequired: 4 },
  10: { type: 'watch', lossesRequired: 4 },
  11: { type: 'watch', lossesRequired: 2 },
  12: { type: 'watch', lossesRequired: 2 },
  13: { type: 'watch', lossesRequired: 2 },
  14: { type: 'none' },
  15: { type: 'none' }
};

function getLevelLossRule(level) {
  return LEVEL_RULES[level] || { type: 'none' };
}

function getNextLevelAfterLoss(level, maxLevel = 15) {
  const nextLevel = level + 1;
  if (nextLevel > maxLevel) {
    return maxLevel;
  }
  return nextLevel;
}

module.exports = {
  LEVEL_RULES,
  getLevelLossRule,
  getNextLevelAfterLoss
};
