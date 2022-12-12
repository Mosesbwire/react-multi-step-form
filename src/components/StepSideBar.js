import React from 'react'
import Step from './Step'

const StepSideBar = () => {
  return (
    <div className='sidebar'>
      <div className='steps flex-container'>
        <Step step_number='1' step_text='STEP 1' step_info='Your info'/>
        <Step step_number='2' step_text='STEP 2' step_info='Select plan'/>
        <Step step_number='3' step_text='STEP 3' step_info='Add-ons'/>
        <Step step_number='4' step_text='STEP 4' step_info='Summary'/>
      </div>
    </div>
  )
}

export default StepSideBar
