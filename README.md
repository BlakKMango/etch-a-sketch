# etch-a-sketch
Project as part of The Odin Project: Foundations course. 

This is my second project as someone new to development and the second time using JS.

PROJECT GOAL:
Create a webpage that allows users to draw on a webpage by colouring in boxes with their mouse i.e. an etch-a-sketch or sketchpad. The users should be able to:

- Choose the number of boxes they want in their grid
- Be able to wipe it clean and start a new grid

My additional goals:
- Allow the user to select colours and apply those to the boxes





<!-- PSEUDOCODE / NOTES -->
PROJECT FLOW:
1. On page load, user is asked how many squares they want in the box (per side).
2. User inputs a number <= 100. Numbers over 100 cannot be accepted.
3. The page generates the grid according to user input, however the area of the grid stays the same.
4. User is able to select a colour and colour in the boxes.
5. User can click the refresh button to trigger a new pop-up for number of boxes and clear the page. Or click a separate button that only clears the page without re-asking.


<!-- TASK ONE - PAGE DESIGN AND LAYOUT -->
1. Update the index page to include a set-sized box (to contain the sketchpad).
    - Grid needs to be a flexbox, however, it needs to stay the same size and the child items need to resize.
    - Grid needs to appear in the same location each time.
2. Two buttons - One says "New Grid" one says "Clear".

