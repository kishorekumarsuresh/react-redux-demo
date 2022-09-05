import React from "react";
import CakeContainer from "./components.js/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      Redux concepts
      <CakeContainer/>
       
    </div>
   </Provider>
  );
}

export default App;
