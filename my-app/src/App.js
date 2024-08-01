import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [inputData, setInputData] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/process', { data: inputData });
      setResponseData(response.data);
    } catch (error) {
      console.error("There was an error sending the data!", error);
    }
  };

  return (
    <div className='App'>
      <div className="App-Header">
        <h2>Response:</h2>
      </div>
      <div className='BodyPart'>
   
            {responseData && (
              <div className='App-Response'>
                <pre>{JSON.stringify(responseData, null, 2).replace(/\\n/g, '')}</pre>
                </div>
            )}
      
        <div className='App-Input'>
          <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputData} 
                onChange={(e) => setInputData(e.target.value)} 
                placeholder="Ask me a question ...."
              />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
