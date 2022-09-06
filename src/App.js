import React from "react";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store,{persistor}from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import CakeContainerUsingHooks from "./components/CakeContainerUsingHooks";
import IceCreamContainer from "./components/IceCreamContainer";
import CaptchaGenerator from "./components/CaptchaGenerator";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <div className="App">
      Redux concepts
      {/* <CakeContainerUsingHooks/> */}
      {/* <CakeContainer/> */}
      {/* <IceCreamContainer/> */}
      {/* <CaptchaGenerator/> */}
      <UserDetails/>
      
    </div>
    </PersistGate>
   </Provider>
  );
}

export default App;
