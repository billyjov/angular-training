# 03-05 Higher oder Observable `concatMap`, `mergeMap` and `switchMap`

## DEMOS

- StackBlitz - [RxJS Higher Order Observables](https://stackblitz.com/edit/rxjs-observables)

## Training

### Training 1:

Use `mergeMap` and `forkJoin` to fetch data from multiple endpoints and combine the results into a single
object. For example, you could fetch a user's profile, their list of posts, and their list of
comments on each post, and combine all of this data into a single object.

**Hint**: You can use [JSON Placeholder](https://jsonplaceholder.typicode.com/) or something 
similar as API for this training and following training.

### Training 2:

Use `switchMap` to implement a typeahead search feature. As the user types into a search box, send requests to a
server to fetch search results. If the user types a new character before the previous request completes,
cancel the previous request and send a new one based on the updated search term.

### Training 3:

Use `concatMap` to implement a queue of tasks that need to be executed one at a time. For example,
you could have a button on a page that, when clicked, adds a new task to the queue. Each task could
involve making an HTTP request to a server to update some data. Use `concatMap` to ensure that each
task is executed in order, with the next task not starting until the previous one has completed.
