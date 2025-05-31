import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import Contador from "./component/Contador";
import ContadorConSlice from "./component/ContadorConSlice";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Toolkit</h1>
        <Contador/>
        <ContadorConSlice/>
      </div>
    </Provider>
  );
}

export default App;
