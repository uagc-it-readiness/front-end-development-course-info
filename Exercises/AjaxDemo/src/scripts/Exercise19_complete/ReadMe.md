# Exercise 19 - Getting and Posting

## Overview
We're going to write a simple Get and Post application.  


## Setup

Run `npm install` to install all the required packages.

## Running the project

Run `gulp dev` to start the website.

## Tasks

### Complete the function `loadPosts`

This function is to perform the following actions.
- Execute a get request using the variable `url`
- Take the response and pass it to the function `convertResponseToHTML`.
    - This function loops through the response and returns structured html
- Set the html of the element with id `main` equal to the converted html.


### Complete the function `savePost`

This function is already retrieving the post object from the form.  You need to finish the function.
- Take the `postObj` and execute a post request using the variable `url`
- When the post is complete, run the function `loadPosts`
    - The content on the screen should update with the latest information.