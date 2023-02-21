# Module 03-02: RxJS Operators

## DEMOS

- StackBlitz - [RxJS Observables](https://stackblitz.com/edit/rxjs-observables)

## Training

### Training 1: Create a custom operator

Create a custom RxJS operator that takes an array of numbers as input and outputs an array of 
numbers that only includes the numbers that are greater than 10.

**HINT:** You can use the `filter` operator to filter out the numbers that are less than 10.

### Training 2: Observables and Array

Create a custom RxJS operator that takes an observable of strings as input and outputs an observable 
of arrays of strings, where each array contains only the strings that share the same first letter.

**HINT:** You can use the `reduce` operator to group the strings that share the same first letter.

### Training 3: RxJS custom operator

Create a custom RxJS operator that takes an observable of objects with a createdAt property 
as input and outputs an observable of arrays of objects, where each array contains objects 
that were created within a specified time window. Use your custom operator inside an Angular
component to display the objects in the UI.

**HINT:** Take a look at `scan` and `filter` operators
