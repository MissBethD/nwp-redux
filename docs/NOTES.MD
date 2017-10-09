## Outline:
- React refresher 
  - What / Why
  - Props and State
  - Callbacks and Sharing State
- Redux
  - What, Why?
  - When to use redux vs local state?
- Setup the app (create-react-app)
- Setup the store and root reducer
- Setup logging middleware
- Dispatch actions
  - Actions
  - Action Creators
- Create reducers to respond to actions
- Dispatch async Actions
  - Install redux-thunk
  - Add to middleware
- connect(), <Provider>
- Reducers and Mutations


---

###  Refresher on React basics:
  - Props vs State
  - setState
  - Sharing state + Callbacks


### Redux Basics:
  - What is redux? Why?
  - Actions vs "Action Creators"
  - Dispatch
  - Creating the store:
    - createStore(), compose(), applyMiddleware()
    - Reducers
    - Root Reducers
  - Handling Async Actions
    - Middleware (Thunk)


### Reducer Gotchas:
  - Handling mutations
    - Hint: (Always return a new copy of state)
    - Suggestion: Immutable.js
  - Combining Reducers


###  [Store API](http://redux.js.org/docs/api/Store.html)
  - getState()
  - subscribe()
  - dispatch()
  - replaceReducer() — Note: We wont cover this today.

### [React-Redux] (https://github.com/reactjs/react-redux)
  - connect()
  - <Provider/>


### Links
  - [React](https://reactjs.org/)
  - [Redux](http://redux.js.org/)
  - [redux-logger](https://github.com/evgenyrodionov/redux-logger) -- log actions to console
  - [redux-thunk](https://github.com/gaearon/redux-thunk) - handle async actions
  - [Create React App](https://github.com/facebookincubator/create-react-app) - React Starter Kit
  - [You might not need Redux - Dan Abramov](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
  - [When you use Redux](http://redux.js.org/docs/faq/General.html#general-when-to-use)
  - [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
