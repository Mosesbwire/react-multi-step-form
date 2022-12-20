import { Fragment, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import StepSideBar from './components/StepSideBar';
import Form from './components/Form';




function App() {

  const [selectedPlan, setSelectedPlan] = useState({
    monthlyBilling: true
  })

  const [selectedAddon, setSelectedAddon] = useState([])

  
  return (
    <Router>
      <Fragment>
        <section className='main'>
          <StepSideBar/>
          <div>
            <Routes>
      
              <Route path='/form' element={<Form 
                setPlan={setSelectedPlan} 
                selectedPlan={selectedPlan}
                setSelectedAddon={setSelectedAddon} 
                selectedAddon={selectedAddon}
              />}/>
            </Routes>
          </div>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
