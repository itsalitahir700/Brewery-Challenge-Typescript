import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/RootReducer";

const composeEnhancer =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function configureStore(
  initialState = {}
): ReturnType<typeof createStore> {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk), applyMiddleware(logger))
  );
}
