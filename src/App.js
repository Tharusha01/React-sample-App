import NavBar from './components/navBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React,{ Component } from 'react';
import Detail from './components/Detail'

function currentDate(){
  var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  return today
}

class App extends Component {
  render() {
    return (
      <div className="body">
        <div className="container">
          <h1 className="text-center">React web Application</h1>
          <h5 className="text-center">{currentDate()}</h5>
          <NavBar />
        </div>
        <Detail /> 
      </div>

    );
  }
}

export default App;