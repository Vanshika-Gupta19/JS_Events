//A Promise is a computation that may (or may not) eventually return a single value.
// An Observable is a lazily evaluated computation that can synchronously or asynchronously return zero to (potentially) infinite values from the time it's invoked onwards.

import {Observable} from 'rsjx';

const observable = new Observable (function subscribe(subscriber){
  console.log("Hello");
  subscriber.next(42);
})

observable.subscribe((x)=>{
  console.log(x);
})

observable.subscribe((y)=>{
  console.log(y);
})


//'observable.subscribe' and 'subscribe' in new Observable(function subscribe(subscriber) {...}) have the same name. In the library, they are different, but for practical purposes you can consider them conceptually equal.


//The code inside 'new Observable(function subscribe(subscriber) {...})' represents an "Observable execution", a lazy computation that only happens for each Observer that subscribes. The execution produces multiple values over time, either synchronously or asynchronously...


// There are three types of values an Observable Execution can deliver:
// "Next" notification: sends a value such as a Number, a String, an Object, etc.
// "Error" notification: sends a JavaScript Error or exception.
// "Complete" notification: does not send a value.


const foo = new Observable(function subscribe(subscriber) {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});



//another eg:-
import { Observable } from 'rxjs';

const obsvable = new Observable(function subscribe(subscriber) {
  const id = setInterval(() => {
    subscriber.next('hi');
  }, 1000);
});

const subscription = obsvable.subscribe((x)=>{console.log(x)})

subscription.unsubscribe();


//Observers are just objects with three callbacks, one for each type of notification that an Observable may deliver.
//observable.subscribe(observer);



//Observable provides operators like map, forEach, reduce, ... similar to an array :-
//EXAMPLES ----->

//Observable.of(...items):-

// Logs 1, 2, 3
Observable.of(1, 2, 3).subscribe(x => {
  console.log(x);
});




// Observable.from(value):-
let list = [1, 2, 3];

// Iterate over an object
Observable.from(list).subscribe(x => {
  console.log(x);
});




// observable.filter(callback) :-
Observable.of(1, 2, 3).filter(value => {
  return value > 2;
}).subscribe(value => {
  console.log(value);
});
// 3


// observable.map(callback) :-
// Returns a new Observable that emits the results of calling the callback argument for every value in the stream.

Observable.of(1, 2, 3).map(value => {
  return value * 2;
}).subscribe(value => {
  console.log(value);
});
// 2
// 4
// 6


// observable.reduce(callback [,initialValue]) :-
Observable.of(0, 1, 2, 3, 4).reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}).subscribe(result => {
  console.log(result);
});
// 10



// observable.concat(...sources) :-
Observable.of(1, 2, 3).concat(
  Observable.of(4, 5, 6),
  Observable.of(7, 8, 9)
).subscribe(result => {
  console.log(result);
});
// 1, 2, 3, 4, 5, 6, 7, 8, 9



// observable.all() :-
let Observable = Observable.of(1, 2, 3);
for (let value of await observable.all()){
  console.log(value);
}
// 1, 2, 3