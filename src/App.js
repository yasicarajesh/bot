import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './components/topbar';
import About from './components/about';
import Service from './components/service';

class App extends React.Component{
  render(){
    return(
      <>

       <Top/>
       <About/>
       <Service/>


 </>
);
}
}


export default App;
