import './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilPhoto from './Component/Profile/ProfilPhoto';


function App() {
  return (
    <div className="App">
      
      <ProfilPhoto />
      <FullName />
      <Address />

    </div>
  );
}

export default App;
