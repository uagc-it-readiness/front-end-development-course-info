# Assignment 14

In today's assignment you are going to be recreating the form that can be found here: [https://worthyd.github.io/dummy-sites/simple-forms/](https://worthyd.github.io/dummy-sites/simple-forms/)

Focus on the HTML first, then the JavaScript and then work on the CSS.

## HTML
Use what we have learned today to make this form.  It needs to have the following *text* `inputs`.

- First Name
- Last Name
- Email

It also needs two *password* `inputs`

- Password
- Confirm Password

Each element needs to have the following attributes filled out

- type
- name
- id
- placeholder

Each input also needs to have a corresponding label associated to it.


Add a `select` input to represent the user's time zone.  It needs to have the following values.

- An empty value
- Eastern
- Central
- Mountain
- Pacific

Add a `textarea` that will represent a user's 'About Me' section.

Add two `buttons` with the `type` set to `button` to the bottom of the document. That will represent the following actions.  **Make sure to use the `type` of `button` even though you may be tempted to use `submit` or `reset`**

- Submit
- Reset

## JavaScript
Perform the following actions
- Add a click event listener to your submit button. Make a function the will execute when the button is clicked.
- Add a click event listener to your reset button. Make a function the will execute when the button is clicked.

In your function for submitting the information, write code to check the following conditions.

- First Name is filled out
- Last Name is filled out
- Email is Filled out
- Email contains an '@' sign
- Password is filled out
- Confirm Password is filled out
- A timezone must be selected
- The 'About' textarea must be filled out
- The 'Accept Terms and Conditions' must be checked

Build an array of error messages to display to the user when a rule is violated

Add a custom CSS class to the input element when it is invalid.  
Remove the class if it is valid.

Display a success message if all the fields are filled out properly


## CSS
Style the form as you see fit, but it must meet the following requirements

- Any error messages must be a different color than black
- Invalid inputs must have a different border and background color than a valid input.
