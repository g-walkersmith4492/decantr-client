# Full Stack Project

## Link to API Respoitory

https://github.com/g-walkersmith4492/decantr-api

## What decantr does and how it works:

Decantr is a website where a user can sign up, sign in and submit a wine that they have tasted,
with various attributes specific to that wine (country, region, varietal, abv, etc).
The user can then review all of the wines they have tried, update previous submissions,
delete previous submissions, find a review by a specific ID, or find out which wine
they have given the highest rating (if two wines are tied, it will display the
first one entered).  The user can also change their password and log out of the application.

I built an API using Rails which accepts numerous attributes for a resource called Wine.  This was done using a private controller, so only logged in users can access and edit their own reviews.  I then added the User resource, which was created in the rails API template,
to my Wine resource, and set it up so my User has_many wines. I then deployed the application to Heroku, so the API could be accessed by my front-end.

I then built the front-end first by setting up the authentication, so that users
can sign-in, sign up, change their password, and sign out (CRUD). Once this was complete, I
did the same thing but for the Wine resources, so a user could add a review,
update their review, access their reviews, and delete their review.


## Link to deployed sites

https://decantr.herokuapp.com
https://g-walkersmith4492.github.io/decantr-client/


## List of Technologies used during this project:

- JavaScript
- jQuery
- HTML
- CSS
- Bootstrap
- Sass
- jQuery
- ajax
- API
- Rails
- Handlebars

## Wireframe and User Stories:

Wireframe -> https://imgur.com/a/NJPrC7P

As a user, I want to be able to make an account.

As a user, I want to be able to sign in

As a user, I want to be able to change my password.

As a user, I want to be able to submit a wine I have tried.

As a user, I want to be able to update previous submissions.

As a user, I would like to be able to access what my favorite wine is.

As a user, I would like to be able to access reviews by a specific ID.



## Unsolved Problems/Future Plans:

One of the main issues I had when building decantr is with the bootstrap Modal.
For some reason, after a resource has been updated, if I automaticall refresh
the page, you can no longer scroll.  I do not know if there is a fix for this,
or if this is something actually wrong with the Modal itself.  In order to make sure
this still met requirements, I added a user message at the top which says the
resource had been updated.  Although this meets requirements, it does not look great,
as the user has to scroll up to know that their resource was succesfully updated.

One future plan I have is to update the search function so that users can search
their reviews by name/country/varietal.  Currently, the user can only search by ID,
which isn't necessarily the best feature as it would require the user to be
aware of the arbitrary ID number.

## Planning/Development Process:

I approached this project by following the schedule suggested for us pretty strictly.
This involved starting with creating resources, and testing with curl scripts for both
User and Wine.  I then moved on to being able to actually update these things in the
browser.  I think I spent the most amount of time altering things in my ui.js file.
Because I used handlebars, and have multiple buttons which display various things,
it got a little confusing when to show or hide certain pages.

For problem solving, I very heavily relied on using console.log to fix my problems.  It
often get confusing what information is being passed through the API through getFormFields,
and what information is being returned from the API.  Using console.log really helped
visualize what was going on behind the scenes.

Additionally, instead of copy and pasting things from my Tic Tac Toe project (which
would have saved time), I tried to type everything out by hand and from memory.
Although this resulted in a few frusturating typos, and it took longer, it really
allowed for me to better understand the entire process.  Subsequently, I could
better leverage what I had set up to implement certain features.
