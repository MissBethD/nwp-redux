### Setup store with dev tools and middleware
```javascript
const middlewares = [
    thunk,
    logger
  ];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  
  const enhancers = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(
    rootReducer,
    initialState,
    enhancers
  );
```


### Example Reducer
```javascript
export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
  return state;
}
```

### Combine reducers
```javascript
combineReducers({
  counter: counter
})
```

### Unsubscribe
Invoke the function returned by store.subscribe() to unsubscribe the listener.

```javascript
let unsubscribe = store.subscribe(handleChange);
unsubscribe();
```
