import {RouterProvider} from "react-router-dom"
import {Provider} from "react-redux"
import appRouter from "./Router";
import appStore from "./utils/appStore";


function App() {

  return (

    <Provider store={appStore}>
       <RouterProvider router={appRouter}>
       </RouterProvider>
    </Provider>

  );

}

export default App;
