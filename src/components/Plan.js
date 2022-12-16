import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const Plan = ({plan, setPlan, selectedPlan}) => {

  const planSetter = (selectedPlan,plans)=>{
    setPlan({...selectedPlan, ...plans})


  }
  return (
    <div className='flex-container plan' onClick={e => planSetter(selectedPlan, plan)}>
      <div className='image-container'>
        <img src={plan.imgUrl} alt='plan icon'/>
      </div>
      <div>
        <p className='blue-text plan-title'>{plan.name}</p>
        
        {selectedPlan.monthlyBilling ? ( <p className='light-text'>${plan.monthlyRate}/mo</p>):
         (<Fragment>
          <p className='light-text'>${plan.yearlyRate}/yr</p>
          <p className='offer-text'>{plan.offer}</p>
         </Fragment>)}
      </div>
    </div>
  )
}

Plan.propTypes = {
  plan: PropTypes.object.isRequired,
  setPlan: PropTypes.func.isRequired,
  selectedPlan: PropTypes.object.isRequired,
}

export default Plan
