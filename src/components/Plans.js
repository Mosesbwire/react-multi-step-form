import React, {Fragment,useRef,useEffect} from 'react'
import PropTypes from 'prop-types'
import Plan from './Plan'
import Action from './Actions'
import icon_arcade from '../assets/images/icon-arcade.svg'
import icon_pro from '../assets/images/icon-pro.svg'
import icon_advanced from '../assets/images/icon-advanced.svg'

const Plans = ({setPlan, selectedPlan, setPage, page}) => {
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
  const switchBtn = useRef(null);

  useEffect(() => {
    if(!selectedPlan.monthlyBilling){
      switchBtn.current.style.left = "60%"
    }

    if (selectedPlan.monthlyBilling){
      switchBtn.current.style.left = "0"
    }

  }, [selectedPlan.monthlyBilling])

  const onSlide = () => {
    if (selectedPlan.monthlyBilling){
      setPlan({...selectedPlan,monthlyBilling: false})
      
    }else {
      setPlan({...selectedPlan,monthlyBilling: true})

    }
  }
  return (
    <div className='card-info'>
      <h1 className='primary-title'>Select your plan</h1>
      <p className='secondary-title'>You have the option of monthly or yearly billing.</p>

      <div className='plans'>
        {plans.length > 0 ? (<Fragment>
          {plans.map((plan,index)=>(
            <Plan plan={plan} key={index} setPlan={setPlan} selectedPlan={selectedPlan}/>
          ))}
        </Fragment>): null}
     
      </div>

      <div className='billing-cycle'>
        <div className='flex-container billing-cycle-wrapper'>
            <p>Monthly</p>
            <div className='select-billing-cycle'>
              <div className='cycle-selector' ref={switchBtn} onClick={e => onSlide()}></div>
            </div>
            <p>Yearly</p>
        </div>
      </div>
      <Action text={'Next Step'} btnColor={'bg-dark'} setPage={setPage} page={page}/>
    </div>
  )
}

Plans.propTypes = {

  setPlan: PropTypes.func.isRequired,
  selectedPlan: PropTypes.object.isRequired,

}

export default Plans
