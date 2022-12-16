import { Fragment, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import StepSideBar from './components/StepSideBar';
import PersonalInfo from './components/PersonalInfo'
import Plans from './components/Plans'
import Addons from './components/Addons'
import Summary from './components/Summary'
import Thankyou from './components/Thankyou'

import icon_arcade from './assets/images/icon-arcade.svg'
import icon_pro from './assets/images/icon-pro.svg'
import icon_advanced from './assets/images/icon-advanced.svg'


function App() {
  const plans = [
    {
      name: 'Arcade',
      monthlyRate: '9',
      yearlyRate: '90',
      offer: '2 months free',
      imgUrl: icon_arcade
    },
    {
      name: 'Advanced',
      monthlyRate: '12',
      yearlyRate: '120',
      offer: '2 months free',
      imgUrl: icon_advanced
    },
    {
      name: 'Pro',
      monthlyRate: '15',
      yearlyRate: '150',
      offer: '2 months free',
      imgUrl: icon_pro
    }
  ]
  const addons = [
    {
      name: 'Online service',
      description: 'Access to multiplayer games',
      monthlyRate: '1',
      yearlyRate: '10',
      
    },
    {
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      monthlyRate: '2',
      yearlyRate: '20',
      
    },
    {
      name: 'Customizable profile',
      description: 'Custome theme on your profile',

      monthlyRate: '2',
      yearlyRate: '20',
     
    }
  ]

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
              <Route path='/' element={<PersonalInfo/>}/>
              <Route path='/plans' element={<Plans plans={plans} setPlan={setSelectedPlan} selectedPlan={selectedPlan}/>}/>
              <Route path='/addons' element={<Addons addons={addons} setSelectedAddon={setSelectedAddon} selectedAddon={selectedAddon} selectedPlan={selectedPlan}/>}/>
              <Route path='/summary' element={<Summary selectedPlan={selectedPlan} selectedAddon={selectedAddon}/>}/>
              <Route path='/finish' element={<Thankyou/>}/>
            </Routes>
          </div>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
