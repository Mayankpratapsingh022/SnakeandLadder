# SnakeandLadder
SnakeAndLadder game in javascript (Command line based)

Two players, "player1" and "player2," take turns.
Players roll a dice to determine the number of spaces they move.
The game board is represented as a linear path from 1 to 100.
Snakes are represented as negative values that move the player backward.
Ladders are represented as positive values that move the player forward.
If a player lands on a snake or ladder, they are moved accordingly.
The game continues until one of the players reaches or surpasses position 100.
The player who reaches 100 first wins the game.

playSnakeAndLadderGame() to run the game.
It uses a JavaScript object, snakesAndLadders, to specify the positions of snakes and ladders on the game board.
The game object tracks the game's state, including the players' positions and whose turn it is.
The rollDice() function simulates rolling a  die.
The movePlayer(player, steps) function updates a player's position and checks for snakes and ladders.
The game continues in a loop until a player wins, with their moves and positions printed in the console.
