Page structure 


.nav-bar 
.hero-section 
.gallery 
.footer


Typography ->
Primary Heading (e.g., “RARE TREASURES, REFINED TASTES.”): Playfair Display (or very close high-contrast serif)
Body Text / Paragraphs: Cormorant Garamond
Navigation / UI Labels: Inter (or a clean modern sans-serif like Helvetica Neue)


<<<<<<< HEAD
5 Day Sprint

Phase 1: The Data Layer

[X] Pick your topic: Decide what you are passionate about (e.g., shoes, video games, movies, recipes, cars, books).

[X] Create your Dataset: Build an Array of Objects. Each object will represent one item in your catalog. (Remember: No APIs allowed. You must type this out in your scripts.js file or load a local JSON file).

[X] Render the Data: Write a JavaScript function that loops through your array and dynamically generates the HTML for your catalog items on the screen.

Phase 2: The Logic (The "Features")

[X] Build Feature 1: Implement your first JavaScript function that operates on your data (e.g., filtering or searching).

[X] Build Feature 2: Implement your second JavaScript function (e.g., sorting or adding an item).

Phase 3: The Finish Line

[X] Publish to GitHub Pages: Push your code to GitHub and turn on GitHub pages in the settings.

[X] Test the Live Site: Make sure your features work on the live internet, not just on your computer.

[ ] Submit: Fill out the Google Form with your Repo Link and Live Site Link.

[ ] Hireflix: Complete the video interview portion.






Reosurces 

HTML DOM Style Object 
https://www.w3schools.com/jsref/dom_obj_style.asp


DOM MANIPULATION
https://www.youtube.com/watch?v=0ik6X4DJKCc

FILTERS IN .JS
https://www.youtube.com/watch?v=qmnH5MT_luk

SORTING
https://youtu.be/R8rmfD9Y5-c?si=ED3gaaC7sMnwyBgp

SERARCH BAR 
https://www.youtube.com/watch?v=utcwfEbv0Aw
=======

Step 1 — Understand what you're filtering
Look at your artworks array. You're going to make a new array that is a smaller version of it based on what the user typed. Look up Array.prototype.filter() on MDN. Read only the basic example.

Step 2 — Write a search function
It needs to do three things:

Read what the user typed — look up document.getElementById().value
Filter artworks down to matches — use what you learned from MDN filter
Call showCards() but on the filtered array, not the full one — you'll need to think about how to pass that in, or temporarily reassign it


Step 3 — Write a sort function
It needs to do two things:

Read which option the user selected — same .value concept as above
Sort the array by price — look up Array.prototype.sort() on MDN, specifically the compare function example


Step 4 — Wire them up
You already know this part from the last message. Replace yourSearchFunction and yourSortFunction with the names you chose.

Step 5 — Test each one in isolation
Use console.log() to print your filtered or sorted array before you even call showCards(). Confirm the data is right before worrying about the display.

That's it. Two functions, five total steps. MDN filter and MDN sort are the only two pages you need.
>>>>>>> dev
