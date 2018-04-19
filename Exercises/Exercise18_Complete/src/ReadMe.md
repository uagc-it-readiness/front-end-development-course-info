# Exercise 18 - Appending and Prepending 
Today we are going to fix some broken code. We're also going to perform an ajax request and prepend/append html to an existing element

## Part 1 Overview
Inside of the file `fixmycode.js` you'll find a block of javascript that is supposed to take the value of the first input, add it to the value of the second input and place the sum in the third input.  It doesn't work.  You'll find some documentation inside the code to help explain what it is expected to do.

## Part 2 Overview
I've provided you two urls in main.js.  I want you to write two ajax requests and perform different actions for each url.

- Take the variable `appendUrl` and perform a get request against the URL
- The result set will be an array of objects.  The object structure will look something like this:
```
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
]
```
- In your ajax callback, select the unordered list with the id of `append` and store it in a variable.
- Loop through the array of objects and append a new list item  to your unordered list for each object.
- The list item syntax should be something similar to:
```
    <li>Index: [index] Title: [object title]</li>
```

- Perform the same task with the `prependUrl`, but prepend to the `prepend` unordered list.  

Your final product should behave like this [https://worthyd.github.io/dummy-sites/Assignment19/](https://worthyd.github.io/dummy-sites/Assignment19/)
