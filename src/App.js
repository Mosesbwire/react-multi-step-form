import { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import StepSideBar from './components/StepSideBar';
import PersonalInfo from './components/PersonalInfo'
import Plans from './components/Plans'
import Addons from './components/Addons'
import Summary from './components/Summary'
import Thankyou from './components/Thankyou'


function App() {
  return (
    <Router>
      <Fragment>
        <section className='main'>
          <StepSideBar/>
          <div>
            <Routes>
              <Route path='/' element={<PersonalInfo/>}/>
              <Route path='/plans' element={<Plans/>}/>
              <Route path='/addons' element={<Addons/>}/>
              <Route path='/summary' element={<Summary/>}/>
              <Route path='/finish' element={<Thankyou/>}/>
            </Routes>
          </div>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
