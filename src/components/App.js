import '../componentscss/App.css';
import Header from './Header';
import {useState} from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function addData() {
    setData([...data, {name, email}]);
    setName("");
    setEmail("");
  }

  function removeItem(index) {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr])
  }

  return (
    <div className="App">
      <Header />
      {/* Form */}
      <div className="form">
        <input
          type='text'
          placeholder='Name' 
          className="fields" 
          value={name}
          onChange={(event) => setName(event.target.value)}>
        </input>

        <input
          type='text'
          placeholder='Email-Id'  
          className="fields"
          value={email}
          onChange={(event) => setEmail(event.target.value)}>
        </input>

        <button 
          className="button"
          onClick={addData}
          >+
        </button>
      </div>

      {/* Data */}
      <div className="data">
        <div className="box">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => {
            return(
              <div key = {index} className="entries">
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <h4><button className="remove" onClick={() => removeItem(index)}>Delete</button></h4>
              </div>    
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
