# Exercise 12

## Javascript
You are being provided a document that automatically retrieves the values of all the input boxes on the screen. Using what we have learned, perform the following actions in the `update` function.

- Create a new array called `messages`.  This array is going to be used to create a list of validation messages.
    - If first name is empty, add a string with the value 'First Name is required' to the `messages` array.
    - If last name is empty, add a string with the value  'Last Name is required' to the `messages` array.
    - If email address is empty, add a string with the value 'Email is required' to the `messages` array.
- Write a `for loop` statement to output the values inside of the `messages` array into the div with the id of `error-list`
    - Remember you are *adding* each message to the div.
- Create a javascript object called `user` with the following properties 
    - firstname - Set the value of it it to the first name input
    - lastname - Set the value of it it to the last name input
    - email - Set the value of it it to the email input
- Add the following *method* to the `user` object
    - fullname - make this equal to the first and last name with a space in between them.
- Log the `user` to the console to verify the contents of the object.

- If the whole form is valid. Hint: If there are no items in the `messages` array. 
    - Create a string variable that is the current date. See the slide 'Converting Dates to Strings'.
        - `var submittedDate = ???????????; //submittedDate = "Mon Aug 28 2017"`
    - Make an alert box appear that says "Submitted on [date]". Replace [date] with the generated date above
        - Example: Submitted on Mon Aug 28 2017

## JS Questions
In the scripts folder you will find a file named questions.js.  

- Answer the set of questions in that file with the spaces provided.  
- Add a reference to the file in index.html.  The slides from 8/17 can help you if you don't remember.