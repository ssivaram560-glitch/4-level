function buildBSFromList(list, count = 7) {
  if (!list || !Array.isArray(list)) return [];
  return list.slice(0, count).map(item => {
    const num = parseInt(item.number || item.winNumber || 0);
    return num >= 5 ? 'BIG' : 'SMALL';
  });
}

function detectCondition3(list) {
  if (!list || !Array.isArray(list) || list.length < 5) return null;

  const last5nums = list.slice(0, 5).map(item => {
    const num = item.result || item.number || item.winNumber || item.win || 0;
    return String(num).trim();
  });

  const counts = {};
  for (const n of last5nums) {
    counts[n] = (counts[n] || 0) + 1;
  }

  const repeated = Object.entries(counts).find(([n, c]) => c >= 3 && n !== '0');
  if (repeated) {
    const [num, cnt] = repeated;
    return {
      type: 'SIZE',
      val: 'SKIP',
      conf: 100,
      pat: 'COND3',
      action: { skip: 3, repeated: num, count: cnt }
    };
  }

  return null;
}

module.exports = {
  buildBSFromList,
  detectCondition3
};
