# 3D Interactive Card

A simple web project that creates an interactive 3D card with realistic corner push/pull effects. When your mouse moves near a corner of the card, that corner appears to be pushed in, while the opposite corner is pulled up.

## Features

- Centered 3D card with gradient background
- Interactive corner effects that respond to mouse proximity
- Smooth transitions and realistic 3D transformations
- Pure HTML, CSS, and JavaScript implementation (no external libraries)

## How It Works

The project uses CSS 3D transforms and JavaScript to:

1. Track mouse position relative to the card
2. Calculate the distance to each corner of the card
3. Apply appropriate 3D transformations based on the closest corner
4. Adjust the intensity of the effect based on proximity

When your mouse approaches a corner of the card, the JavaScript calculates rotation and translation values to create the illusion that the corner is being pushed in while the opposite corner is pulled up.

## Running the Project

Simply open `index.html` in a modern web browser. Move your mouse around the card to see the interactive effect.

## Files

- `index.html`: Basic HTML structure
- `styles.css`: Styling and 3D transform setup
- `script.js`: Interactive JavaScript logic
