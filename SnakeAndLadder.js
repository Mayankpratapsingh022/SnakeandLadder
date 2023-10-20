function playSnakeAndLadderGame() {
    const snakesAndLadders = {
      // snakes
      28: -18,  
      37: -34,  
      48: -32,
      75: -43,
      94: -23,
      96: -54,
      // ladders
      4: 52,
      12: 38,
      14: 41,
      22: 36,
      41: 38,
      54: 34,
    };
  
    const game = {
      players: {
        player1: 0,
        player2: 0,
      },
      currentPlayer: 'player1',  // Starting with player 1
      isGameOver: false,
    };
  
    function rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    }
  
    function movePlayer(player, steps) {
      const newPosition = game.players[player] + steps;
      if (newPosition >= 100) {
        game.players[player] = 100;  
        game.isGameOver = true;
      } else {
        const nextPosition = game.players[player] + steps;
        const modifier = snakesAndLadders[nextPosition];
        
        if (modifier) {
          game.players[player] += modifier;
        } else {
          game.players[player] = nextPosition;
        }
      }
    }
  
    while (!game.isGameOver) {
      const steps = rollDice();
      const currentPlayer = game.currentPlayer;
      
      console.log(`${currentPlayer}'s turn. Rolled a ${steps}.`);
      
      movePlayer(currentPlayer, steps);
    
      console.log(`${currentPlayer} is now at position ${game.players[currentPlayer]}.`);
      
      if (game.players[currentPlayer] >= 100) {
        console.log(`${currentPlayer} wins!`);
        game.isGameOver = true;
      } else {
        game.currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';
      }
    }
  }
  
  // Call the function to start the game
  playSnakeAndLadderGame();
  
