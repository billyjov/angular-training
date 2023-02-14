# Module 03-01: RxJS `Observables`

## DEMOS

- StackBlitz - [RxJS Observables](https://stackblitz.com/edit/rxjs-observables)

## Training

### Training 1: Using `Observable` creation functions to create an `Observable`

---

- Create a new Angular component, let's call it `UserComponent`.
- In the "UserComponent", import the necessary RxJS functions: `of`, `from`, `interval`, and `fromEvent`.
- In the component's class, create a method called `createObservable()` that returns an Observable of your choice.
  For example, you could create an Observable using the of function that emits an array of user objects.
- In the component's template, use the `async` pipe to subscribe to the Observable returned from `createObservable()` and display the emitted values in the UI.
- Add a button to the template and use the `fromEvent` function to create an Observable that emits a click event every time the button is clicked.
- Use the interval function to create an Observable that emits a number every second, and use the `takeUntil` operator to stop the emission of values when the button from previous step is clicked.
- Finally, use the `from` function to create an Observable from a promise that resolves to a user object, and use the merge operator to merge this Observable with the Observable from step 6. Use the `async` pipe to display the emitted values in the UI.
