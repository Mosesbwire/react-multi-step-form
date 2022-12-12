import React from 'react'
import Step from './Step'

const StepSideBar = () => {
  return (
    <div className='sidebar'>
      <div className='steps flex-container'>
        <Step/>
        <Step/>
        <Step/>
        <Step/>
      </div>
    </div>
  )
}

export default StepSideBar
