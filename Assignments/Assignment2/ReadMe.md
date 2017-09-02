# Assignment 2
Complete the following tasks inside of your UA-Work repository.

## CSS HTML Component
Recreate the website in the picture [assignment2.png](assignment2.png).  You'll find two images in this folder to use for the site.  You'll get all the text, font sizes and colors in [text.md](text.md)

A web version of the project will be posted in one week. Get as much done as you can using just the image.

## JS Component
Write a lightweight JavaScript library for converting dates into readable strings.

- Create a file and name it DateFormatting.js
- Create an object and name it `DateFormatter`
- Create the following methods.  All methods will have one input parameter.
    - `getShortTime` - returns a the date's time with hours, minutes and AM or PM
        - Example: "4:20 PM", "3:00 AM"
    - `getLongTime` - returns a the date's time with hours, minutes, seconds and AM or PM
        - Example: "4:20:20 PM", "3:00:33 AM"
    - `getShortDate` - returns the date in the following format `month/day/year`
        - Example: "1/20/2017", "10/15/2017"
    - `getLongDate` - returns the date in the following format `Month Day, Year`
        - Example: "January 20, 2017", "October 15, 2017"
    - `getShortDateTime` - returns the date in the following format `month/day/year hour:minutes AM|PM`
        -Example: '1/20/2017 4:20 PM', '10/15/2017 3:00 AM'
    - `getLongDateTime` - returns the date in the following format- `Month Day, Year hour:minutes AM|PM`
        - Example: "January 20, 2017 4:20 PM", "October 15, 2017 3:00 AM"
    - `getExtendedDateTime` - returns the date in the following format- `Day of the week, Month Day, Year hour:minutes AM|PM`
        - Example: "Friday, January 20, 2017 4:20 PM", "Sunday, October 15, 2017 3:00 AM"
- At the bottom of the file, add console logs to see the output of your methods.        
- Example to get you going
```
    getMonthYear: function(date){
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return month + '/' + year; //return "9/2017
    }

    //bottom of DateFormatting.js
    var getMonthYear = DateFormatter.getMonthYear(new Date());
    console.log('Get Month Year ' + getMonthYear);
```
# JS Challenge
- Make a file named DateFormatting.tests.js. 
- Write tests to validate your code is formatting as expected.
    - Make a Date variable for a specific date & time and put it through your specific formatter.
    - Make a string variable for what you _expect_ the output to be.
    - Console log 'Success' if they match.
    - `throw` an error message if they do not match.  You'll probably need to google this one.
- Write 2 tests for each method in the DateFormatter object.
