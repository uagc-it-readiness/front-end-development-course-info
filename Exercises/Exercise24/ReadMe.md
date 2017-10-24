# Exercise 24 - Bootstrap Grid and Components

In this exercise you are going to practice Bootstrap's Grid system and implement some components.

## Part 1 - Recreate the following images by adding classes in index.html

- There are only two break points.  Use the medium or large one. It does not matter.
- You can recreate both images without adding or removing any html.
- Look back at the slides for reference if you get stuck.  The main documentation has a lot of additional content.

### Desktop
![desktop.png](desktop.png)

### Mobile 
![mobile.png](mobile.png)

## Part 2 - Adding some JavaScript

Add some basic JavaScript to the page.  Do all your work in `scripts/main.js`

- Add a document.ready code block to trigger the code on page load.
- Add a click event listener to the button with the id `btnSubmit`.
    - Fade the form out
    - Fade the `thankyou` div in.  This needs to be a callback to the fade out.
- Challenge: Refer to [Bootstrap's form validation section](http://getbootstrap.com/docs/4.0/components/forms/#validation) and add the required JavaScript and html to leverage Bootstrap's validation functionality.
    - Apply these rules:
    - Your Name is Required
    - Your Email is required
    - Your Message is required.
    