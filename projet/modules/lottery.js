const loto = function ({ min, max, count }) {
    const draw = new Set();
  
    // `size` permet de récuperer le nombre d'element dans un Set
    while (draw.size < count) {
      const random = Math.floor(Math.random() * (max - min + 1) + min);
      draw.add(random);
    }
  
    return Array.from(draw);
  };
  
  const gagnant = function (players) {
  
    const randomIndex = Math.floor(Math.random() * players.length);
  
    return players[randomIndex];
  };
  
  
  module.exports = { loto, gagnant };
  