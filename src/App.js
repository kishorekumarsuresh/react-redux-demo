import React ,{Suspense,lazy}from "react";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
//import store from "./redux/configureStore";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import CakeContainerUsingHooks from "./components/CakeContainerUsingHooks";
import IceCreamContainer from "./components/IceCreamContainer";
import CaptchaGenerator from "./components/CaptchaGenerator";
import UserDetails from "./components/UserDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Loader from "./components/Loader";
import NewsApp from "./components/NewsApp";

//const NewsApp = lazy(()=> import('./components/NewsApp'))
// const NewsApp = lazy(() => {
//   return new Promise ((resolve,reject )=> {
//     setTimeout(() => resolve(import('./components/NewsApp')),2000) 
//     //reject(alert('Oops Error has occured!'))
//   })
// })

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="App">
            Redux concepts
            {/* <CakeContainerUsingHooks/> */}
            {/* <CakeContainer/> */}
            {/* <IceCreamContainer/> */}
            {/* <CaptchaGenerator/> */}
            <Routes>
              <Route path='/' element={<UserDetails/>} />
              <Route path='/create' element={<Create/>}/>
            </Routes>
          </div>
        </PersistGate>
      </Provider>
    </BrowserRouter>
    // <Suspense fallback={<Loader/>}>
    //       <Provider  store={store}>
    //     <div>
    //     <NewsApp />
    //     </div>
    // </Provider>
    // </Suspense>

  );
}

export default App;
