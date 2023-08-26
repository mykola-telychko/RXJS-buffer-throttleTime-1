import { fromEvent } from 'rxjs';
import { buffer, filter, throttleTime } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffer
// Example 1: Using buffer to recognize double clicks

// streams
const clicks$ = fromEvent(document, 'click');

//Collect clicks that occur, after 250ms emit array of clicks
clicks$
  .pipe(
    buffer(clicks$.pipe(throttleTime(250))),
    // if array is greater than 1, double click occured
    filter((clickArray) => clickArray.length > 1)
  )
  .subscribe(() => console.log('Double Click!'));
