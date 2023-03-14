# Module 03-04: RxJS combination 

## DEMOS

- StackBlitz - [RxJS Observables](https://stackblitz.com/edit/rxjs-observables)

## Training

### Training 1: Chain Observables with `concatMap`

Create a simple Angular application that allows users to search for books/user or something else using the Google Books API
or another API of your choice. When the user types a query into an input field, send a request to the API to search 
for books that match the query. Once the API returns the results, display them in a list. When the user clicks on a book in
the list, make another API request to get more information about the book and display it on the page. Use `concatMap`
to chain the requests together.


### Training 2: Combining Observables with `mergeMap`

Create an Angular application that allows users to search for movies using the Open Movie Database API. When the 
user types a query into an input field, send a request to the API to search for movies that match the query. 
Once the API returns the results, display them in a list. When the user clicks on a movie in the list, make another 
API request to get more information about the movie and display it on the page. Use `mergeMap` to parallelize the requests.

### Training 3: 

Create an Angular application that displays real-time data from a stock market API. The application should show 
the current price, change, and percent change for a given stock symbol. Use `switchMap` to cancel previous requests 
when a new symbol is selected. Use `combineLatest` to combine data from multiple API requests into a single observable stream. 
Use `withLatestFrom` to combine the selected stock symbol with other data in the stream, such as the current time. Finally, use `forkJoin` to make multiple API requests in parallel and get the latest data for each stock symbol in a single subscription.
