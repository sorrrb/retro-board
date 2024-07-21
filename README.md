# Retro Board

## Getting Started
To set up the project locally, clone the repository to your local machine and navigate to the root directory for the project. Within the root directory, run the following commands:

***
**`npm install`** to install dependencies  
**`npm run dev`** to initialize the local development server
***

## Roadmap
##### *Rubric requirements*
>- [ ] Project has a `Board` has three seperate `Category` elements:
>    - "Went Well"
>    - "To Improve"
>    - "Action Items"

>- [ ] `Board` has multiple different `Category` elements that have UI element, which when interacted with, adds a new item to the given `Category`

>- [ ] User should be able to enter text within an `Item` of a given `Category`, which is stored in state -- this text should only change when the user is typing within the `Item`

>- [ ] User should be able to delete a given `Item`, removing it from state/the application

>- [ ] User should be able to move an `Item` between each `Category` using arrow button functionality - movement should wrap the board when edges are met, meaning when an `Item` in the left-most `Category` is moved *left*, the item should be moved into the category furthest *right*

>  - [ ] Movement should not affect the visual structure, appearance or user input values of a given item

>- [ ] User should be able to interact with `Item` elements through *like* and *dislike* controls, `Item` elements should display a *vote count*. Clicking the *like* or *dislike* buttons should update the `Item` *popularity*

>- [ ] Project should validate `Item` user input - validation should occur when the item loses focus or is submitted (remove the `Item` from the `Board`, display an error message, etc.)

>- [ ] User should be able to switch / toggle the layout of the `Board` through a UI element to change the layout of the different `Category` elements from horizontally displayed to vertically displayed (and vice-versa)


## Acknowledgements
