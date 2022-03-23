import { useState, Component } from 'react';
import './App.css';
import Average from './hooks/Average';
import AverageUseCallback from './hooks/AverageUseCallback';
import Counter from './hooks/Counter';
import CounterReducer from './hooks/CounterReducer';
import Info from './hooks/Info';
import InfoReducer from './hooks/InfoReducer';
import InfoUseInputs from './hooks/InfoUseInputs';
import UseInputs from './hooks/UseInputs';
import IterationSample from './IterationSample';

function App() {  

    const [visible, setVisible] = useState(false);
    return (
      <>
        <InfoUseInputs />
      </>
    );
  
}
  
export default App;
