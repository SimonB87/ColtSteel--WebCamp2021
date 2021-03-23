// # Destructuring arrays

const pinBallScores = [98000, 81200, 75000, 74120, 68900, 64200];

const [gold, silver, bronze] = pinBallScores;

gold; //98000
silver; //81200
bronze; //75000

const [first, second, third, ...others] = pinBallScores;

others; // [74120, 68900, 64200]