import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Plan from './Plan'
import Action from './Actions'

const Plans = ({plans}) => {
  return (
    <div className='card-info'>
      <hi className='primary-title'>Select your plan</hi>
      <p className='secondary-title'>You have the option of monthly or yearly billing.</p>

      <div className='plans'>
        {plans.length > 0 ? (<Fragment>
          {plans.map((plan,index)=>(
            <Plan plan={plan} key={index}/>
          ))}
        </Fragment>): null}
        {/* <Plan img_src={icon_arcade} plan_title={'Arcade'} monthly_rate={'$9/mo'} yearly_rate={'$90/yr'}/>
        <Plan img_src={icon_advanced} plan_title={'Advanced'} monthly_rate={'$12/mo'} yearly_rate={'$120/yr'}/>
        <Plan img_src={icon_pro} plan_title={'Pro'} monthly_rate={'$15/mo'} yearly_rate={'$150/yr'}/> */}
        
      </div>

      <div className='billing-cycle'>
        <div className='flex-container billing-cycle-wrapper'>
            <p>Monthly</p>
            <div className='select-billing-cycle'>
              <div className='cycle-selector'></div>
            </div>
            <p>Yearly</p>
        </div>
      </div>
      <Action text={'Next Step'} btnColor={'bg-dark'}/>
    </div>
  )
}

Plans.propTypes = {
  plans: PropTypes.array.isRequired,
}

export default Plans
