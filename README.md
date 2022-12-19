# Todo app

In this task you will have to build a basic todo app.

## Requirements

A user can do following things:
- add a task
- edit or delete a task in "to do" state
- delete a completed task
- mark task as completed  

## How to

To manage the state of the todos you have to create an empty list.
A single todo should be an object containg 3 properties: 
- `id` - unique identifier for the item
- `text` - string containing the user input
- `checked` - boolean value storing the information about whether the task has been completed or not

Once a user adds a new todo, create a new object, push it to the existing array and display it on the screen. 
To edit or delete a todo, you need to first locate it in the array with it's `id`. 
When the user marks a todo as completed set the `checked` property as true.

## Bonus 

Try to persist the application state to make things more realistic (keep the current list of todos after page refresh). Use [browser localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)


