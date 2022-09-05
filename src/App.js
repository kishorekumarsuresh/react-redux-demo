import React from "react";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainerUsingHooks from "./components/CakeContainerUsingHooks";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      Redux concepts
      {/* <CakeContainerUsingHooks/> */}
      <CakeContainer/>
      {/* <IceCreamContainer/> */}
      
    </div>
   </Provider>
  );
}

export default App;
