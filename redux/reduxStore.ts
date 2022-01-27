import { configureStore } from "@reduxjs/toolkit";
import { currentUserReducer } from "./reducers/currentUserSlice";

import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/rootSaga";
import { userProfileReducer } from "./reducers/userProfileSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    userProfile: userProfileReducer,
    // toasts: toastsReducer
    // buyListings : buyListingsReducer (state.buyListings), etc
    // rentListings
    // companyListings
    // userListings (including current? or separate?)
    // chat messages
    // ...
    // Live dashboard?
  },
  middleware: [sagaMiddleware],
});

// run all combined sagas??? yes, the rootSaga
sagaMiddleware.run(rootSaga);

// wtf is this all about...? uhhh. great, no types... how about I use the hook instead?
// export const action = (type) => store.dispatch({ type });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
