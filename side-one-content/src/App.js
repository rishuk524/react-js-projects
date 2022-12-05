import React, {Fragment} from "react";

import  Provider  from "./Provider"
import Context from "./Context";


const Agents = () =>{
  return <Agentone />
}

const Agentone = () =>{
  return <Agentwo/>
}


const Agentwo = () =>{
  return <Agentbond/>
}

const Agentbond = () =>{
  return (
    <Context.Consumer>
      {
        (context) =>(
          <Fragment>
           <h3>
             Agent Information
           </h3>
           <p>mission name: {Context.data.name}</p>
           <h2>Mission status:{context.data.accept}</h2>
           <button onClick={context.ismissionaccepted}>choose to accept</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  )
}



const App = () =>{
  return(
     <div>
       <h1>
         Context API
         <Provider>
           <Agents/>
         </Provider>
       </h1>
     </div>
  )
}

export default App