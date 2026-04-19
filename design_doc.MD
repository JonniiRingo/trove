Page structure 


.nav-bar 
.hero-section 
.gallery 
.footer


Typography ->
Primary Heading (e.g., “RARE TREASURES, REFINED TASTES.”): Playfair Display (or very close high-contrast serif)
Body Text / Paragraphs: Cormorant Garamond
Navigation / UI Labels: Inter (or a clean modern sans-serif like Helvetica Neue)



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