
import './App.css';
import Card from './components/Card';
import Counter from './components/Counter';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [details, setdetails] = useState({})
 const fetchdetails = async () =>{
    const {data} = await axios.get("https://randomuser.me/api/")
    // console.log(data);
    const details = data.result[0]
    setdetails(details)
    console.log(details);
 }

    useEffect(() => {
      fetchdetails()
    }, [])
    
  return (
    <div className="App" >
    <Counter/>
    <Card details = {details}/>
    {
    // <Card  imageurl = "https://images.pexels.com/photos/3988304/pexels-photo-3988304.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" buttontext = "Learncodeonlie"/>
    // <Card name = "rishu" imageurl= "https://images.pexels.com/photos/13834229/pexels-photo-13834229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  buttontext = "Learncodeonlie"/>
    }
    </div>
  );
}

export default App;
