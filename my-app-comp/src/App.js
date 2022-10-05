import './App.css';
import {Component} from 'react';
import List from "./components/List/List";

class App extends Component {

  state={
    /*arr:[1,2,3,4,5,6,"qw","adsf"],
    visibleCounter:true*/
  }

  render() {

    const hello = "Доброго вечора!!!";

    return (

        <>

          <p>{hello}</p>
          <List/>

        </>
    );
  }

}


export default App;
