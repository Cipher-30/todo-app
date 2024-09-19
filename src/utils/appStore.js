import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./sliceStore/userSlice"
import taskReducer from "./sliceStore/taskSlice"
import interfaceReducer from "./sliceStore/interfaceSlice";

const appStore = configureStore(
    {
        reducer: {
            user:userReducer,
            task:taskReducer,
            interface:interfaceReducer,
            
        }
    }
);




export default appStore;