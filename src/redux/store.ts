import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/CounterSlice';
//import Logger from './middlewere/logger';


export const store = configureStore({

    reducer: {
        counter:counterReducer,

        
    },
    //https://redux-toolkit.js.org/api/getDefaultMiddleware#included-default-middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  })
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch