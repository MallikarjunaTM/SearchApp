import './App.css';
import {useState,useEffect} from 'react';
import SearchItem from './components/SearchItem';


function App() {
  const [data ,setData] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  
  useEffect(()=>{
      const asynCall= async ()=>{
        const responsdata = await fetch('https://api.github.com/users');
        const resp= await responsdata.json();
        
        setData(resp)
        
      };
      asynCall();

  },[])
  
  useEffect(()=>{

  },[searchValue])

  const changeHandler = e =>{
    setSearchValue(e.target.value);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h4 id='search'>SearchLogin Here</h4>
        <input type='text' name='searchValue' onChange={changeHandler}/>
        <br/>
        {data ? data.map(data=>{
          let newdata=data.login.includes(searchValue) & data.login.startsWith(searchValue);

          return newdata?<SearchItem key={data.id} data={data}/>:null}):null}
        
      </header>
    </div>
  );
}

export default App;
