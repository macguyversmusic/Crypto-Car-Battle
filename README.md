# testing the cloning and repurposing of ethereum apps.

cloned - Crypto Car Battle - https://github.com/CodinMaster/Crypto-Car-Battle

NFT (ERC721) based HTML5 game with Crypto Payouts to the Winner.

### Try it out: [Web Demo Link](https://apoorvlathey.com/projects/crypto-car-battle/)

## Game Walkthrough
1. Login via Metamask
	

2. i)  New Users get to Mint new token.
3. Confirm Metamask Transaction!

ii) View your ERC-721 collection

**New items Minted start from Level 1. With each win, their level increases by 1.
(Max. level: 7)**

***Higher Level corresponds to Higher Speeds***

3. Click on your desired NFT to get to the following menu:
4. Let's Create New Battle!
The Main Game Loads up:
**The Aim of this game is quite simple, the player has to complete the lap in minimum time possible.**
As soon as the user cross the start line, the timer starts. **User has to pass through checkpoint, so no cheating is possible.** On crossing the finish line, game ends.

6. On clicking the "Challenge Others" button, our score gets saved in the Smart Contract. 
**We have to deposit 0.001 Eth into this match **


After transaction goes through, we get Battle Id:

### PLAYER 2
Say some other player wants to compete in an existing battle, so the second button is clicked.

We get a list of Battles available:

Click Battle button and Deposit 0.001 Eth into the Match Pool.

After transaction confirmation, the Game Starts.
**Goal? To finish faster then the opponent!**

After game ends:

Click the Button and Confirm Contract Interaction, to get this (in case you win) :

If we now view our NFTs, we observe increased level as well as new design!

## TRANSFER TO ANOTHER USER
Being the ERC-721 standard NFT tokens, the assets of the game can be traded with players and change ownership.

1. Click on the Transfer button:

2. Just fill-up the "Transfer To" address field and click Transfer.

3. Confirm the Metamask popup

4. And the token has been success fully transferred!

5. Login to that account to view your new NFT:

## Project Setup
1. Clone the Repository
2. Deploy contracts via Remix. 
3. Save the abi and contract address in `'./assets/js/web3setup.js'`
4. Use live-server or any custom server (js, python, php) to serve the HTML5 Phaser Game.
5. Visit `./index.html`in browser to start the game.

## Stack Used
1. Phaser
2. Web3.js
3. HTML5, Vanilla Javascript
