# 🚀 Block Breaker Game

## 🎮 How to Play?

The objective is simple: break all the bricks on the screen without letting the ball escape!

### **Controls**

The game offers you three ways to control the paddle:

1. 🖐️ **With Your Hand:** Activate your camera and use your hand to move the paddle. The game will follow your gestures! (Requires camera permissions).
2. 🖱️ **With the Mouse:** On a computer, simply move the mouse to control the paddle.
3. 👆 **Touch:** On mobile devices and tablets, slide your finger across the screen to move the paddle.

### **Difficulty Levels**

Choose your challenge before starting:

- **Easy:** The ball moves at a slow and constant speed. Ideal for beginners.
- **Medium:** The ball has normal and constant speed. The standard challenge.
- **Hard:** The real challenge! The ball starts slow, but its speed increases a bit more with each brick you break.

### **Lives**

You have 3 lives (❤️) to complete each level. If the ball falls below the paddle, you lose a life. If you lose all three, the game is over!

---

## 🚀 Local Execution

To test the game on your computer, follow these steps:

1. **Install dependencies:**
   Open a terminal in the project folder and run:

   ```bash
   npm install
   ```
2. **Start the server:**
   Once the dependencies are installed, run:

   ```bash
   npm start
   ```
3. **Open the game:**
   Open your browser and go to `http://localhost:3000`.

That's it! You can now play.

## 📁 Project Structure

```
handbreaker/
├── public/           # Static files served by Vercel
│   ├── breaker_game.html
│   ├── manifest.json
│   ├── paddle.png
│   ├── ladrillo.png
│   ├── corazon.png
│   └── esfera.png
├── api/              # Serverless functions
│   └── server.js
├── vercel.json       # Vercel configuration
└── package.json
```
