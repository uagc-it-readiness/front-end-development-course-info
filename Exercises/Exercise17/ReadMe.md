# Exercise 17 

## Practicing our new jQuery Features
You are being provided a simple form with inputs.  Let's add some new functionality we haven't done before.


- When the page loads, select all the elements with the class of 'error' and hide them.
- When the page loads, select all the elements with the class of 'input-group' use .filter() to get the even elements. Add the class 'even' to the selected elements.
- Add an .on('blur') to the FirstName input.  
     - If it has an empty value, show the corresponding error message.
     - The error message has the class 'requiredMsg'
     - You can gain access to the error message element by using the .closest() and .find() methods.
     - Use the .fadIn() and .fadeOut() methods to show and hide the error message.
- Repeat the above step on LastName.
- Repeat the above on the EmailAddress.
- In your .on('blur') for EmailAddress also do the following
    - Check to see if EmailAddress contains the "@" symbol and the ".com" string.
    - Show the error message with the class 'emailMsg'
