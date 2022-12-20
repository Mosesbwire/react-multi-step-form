import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link } from 'react-router-dom'
import Action from './Actions'

const Summary = ({selectedPlan, selectedAddon, setPage, page}) => {

  let duration;

  if (selectedPlan.monthlyBilling){
    duration = {full: "month", short: "mo", full2: "monthly"}
  } else {
    duration = {full: "year", short: "yr", full2: "yearly"}
  }

  
  const totalAddonCost = ()=>{
    let total = 0;
    selectedAddon.forEach(addon => {
        if (selectedPlan.monthlyBilling){
          total += parseInt(addon.monthlyRate)
        }else {
          total += parseInt(addon.yearlyRate)
        }
    });
    return total
  }

  const totalServiceCharge = () => {
    let total = 0;
    if (selectedPlan.monthlyBilling){
      total = totalAddonCost() + parseInt(selectedPlan.monthlyRate)
    } else {
      total = totalAddonCost() + parseInt(selectedPlan.yearlyRate)
    }

    return total
  }

  const totalCost = totalServiceCharge();

  return (
    <div className='card-info'>
      <h1 className='primary-title'>Finishing up</h1>
      <p className='secondary-title'>Double-check everything looks OK before confirming.</p>
      <div className='summary-section'>
        <div className='flex-container sp-btwn'>
            <div>
                <p className='blue-text sb-text'>{selectedPlan.name} <span>({duration.full2})</span></p> 
                
                <Link to={'/plans'} className='light-text change'>Change</Link>
            </div>
            {selectedPlan.monthlyBilling ? <p className='blue-text sb-text'>${selectedPlan.monthlyRate}/<span>mo</span></p> : <p className='blue-text sb-text'>${selectedPlan.yearlyRate}/<span>yr</span></p>}
        </div>
        <div className='addon-summary'>
          {selectedAddon.length > 0 ? <Fragment>
            {selectedAddon.map((addon, index) => (
              <div className='flex-container sp-btwn' key={index}>
                
                <p className='light-text'>{addon.name}</p>
                {selectedPlan.monthlyBilling ? <p className='blue-text'>+${addon.monthlyRate}/mo</p> : <p className='blue-text'>+${addon.yearlyRate}/yr</p>}  
              </div>
            ))}
          </Fragment> : null}
        </div>
      </div>
      <div className='flex-container sp-btwn total-section'> 
        <p className='light-text'>Total (per {duration.full})</p>
        <p className='total-amount'>+${totalCost}</p>
      </div>
      <Action text={'Confirm'} btnColor={'bg-light'} setPage={setPage} page={page}/>
    </div>
  )
}

Summary.propTypes = {
    selectedPlan: PropTypes.object.isRequired,
    selectedAddon: PropTypes.array,
    
}

export default Summary
