import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      
        <Header/>
        <div className="row">
          <div className="col-md-5">
            <Body/>
          </div>
        </div>
    </div>
  );
}

export default App;
