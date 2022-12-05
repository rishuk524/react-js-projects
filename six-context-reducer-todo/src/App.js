import React, {useReducer}from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {Todocontext} from "./context/Todocontext"
import {todoreducer} from "./context/reducer"

const App = () =>{
  const [todos, dispatch] = useReducer(todoreducer, [])
  return (
    <Todocontext.Provider value={{todos, dispatch}}>
       <Container fluid>
        <h1>Todo app with context API</h1>
       </Container>
    </Todocontext.Provider>
  )
}
export default App