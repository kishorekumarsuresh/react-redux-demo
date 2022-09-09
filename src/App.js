import React from "react";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
//import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import CakeContainerUsingHooks from "./components/CakeContainerUsingHooks";
import IceCreamContainer from "./components/IceCreamContainer";
import CaptchaGenerator from "./components/CaptchaGenerator";
import UserDetails from "./components/UserDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import NewsApp from "./components/NewsApp";

function App() {
  return (
    // <BrowserRouter>
    //   <Provider store={store}>
    //     <PersistGate persistor={persistor}>
    //       <div className="App">
    //         Redux concepts
    //         {/* <CakeContainerUsingHooks/> */}
    //         {/* <CakeContainer/> */}
    //         {/* <IceCreamContainer/> */}
    //         {/* <CaptchaGenerator/> */}
    //         <Routes>
    //           <Route path='/' element={<UserDetails/>} />
    //           <Route path='/create' element={<Create/>}/>
    //         </Routes>
    //       </div>
    //     </PersistGate>
    //   </Provider>
    // </BrowserRouter>
    <Provider  store={store}>
        <div>
        <NewsApp />
        </div>
    </Provider>
  );
}

export default App;
