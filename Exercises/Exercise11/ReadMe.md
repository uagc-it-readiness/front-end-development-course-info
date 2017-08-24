# Exercise 11 

## Javascript
This assignment is going to go over most of what we have covered this week.  Perform all of these tasks in the JS-Assignment folder. You should only need to modify the main.js file.

There is existing code inside of main.js that is executed when the 'Update Values' button is pressed.  The existing code currently retrieves the values from the text boxes and logs them to the console.  Add code to calculate out the values described in the strong tags and  populate the corresponding span tags with the values.

### First Name and Last name
Set the following element's innerHTML with the following values

- `p1_fullName` - combine `firstName` and `lastName` with a space in between them
-  `p1_valid` -  boolean value - are `firstName` and `lastName` filled out?
- `p1_fullNameLength` - the number of characters in both `firstName` and `lastName`

### Email Address
Set the following element's innerHTML with the following values

- `p2_email` - put the value of `emailAddress` here
- `p2_valid` - does `emailAddress` contain the "@" symbol? (boolean value)
- `p2_emailLength` - the number of characters in `emailAddress`

### Numbers 
Set the following element's innerHTML with the following values

- `p3_number` - put `randomNumber`'s value here
- `p3_valid` - is `randomNumber` a number? Hint: try to parse the number. If it's a number it will be greater than 0.

### Arrays 

- Add the value of `arrayInput` to the array named `arrayItems`. `arrayItems is declared on the first line of the file.
- `p4_arraylength` - the number of items in `arrayItems`
- `p4_valid` - the value of `arrayItems`



### Additional Challenge 
- In part 1, 2, and 3, if the input field is invalid (it's empty or doesn't meet all of its requirements), add a class of `invalid`. This class is already in the CSS.
- At the beginning of the function, remove the class `invalid` from all inputs


## CSS 
- Open up the webpage at [https://worthyd.github.io/dummy-sites/news-page/](https://worthyd.github.io/dummy-sites/news-page/) and recreate it to the best of your ability. Use your own html structure and classes.