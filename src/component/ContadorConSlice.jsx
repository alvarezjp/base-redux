import { useDispatch, useSelector } from "react-redux";
import {decrement, decrement5, increment, increment5, reset} from "../reducerConSlice/contadorSlice.js"
// import { reset, restar, restar5, sumar, sumar5 } from "../actions/contadorActions";

const ContadorConSlice = () => {
    //acceder al estado
    // const state = useSelector((state)=> state.contador)
    const state = useSelector((state)=> state.contador.contador);
    console.log(state);
    

    //Despachar acciones
    
    const dispatch = useDispatch()


  return (
    <div>
      <h2>Contador con Redux</h2>
      <h2>Con slice</h2>
      <p>{state}</p>
      <nav>
        <button onClick={(incr)=> dispatch(increment5(5))}>+5</button>
        <button onClick={()=> dispatch(increment())}>+1</button>
        <button onClick={()=> dispatch(reset())}>0</button>
        <button onClick={()=> dispatch(decrement())}>-1</button>
        <button onClick={()=> dispatch(decrement5(5))}>-5</button>
      </nav>
    </div>
  );
};

export default ContadorConSlice;
