import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Addon from './Addon'
import Action from './Actions'

const Addons = ({addons, setSelectedAddon, selectedAddon, selectedPlan}) => {
  return (
    <div className='card-info'>
      <h1 className='primary-title'>Pick add-ons</h1>
      <p className='secondary-title'>Add-ons help enhance your gaming experience.</p>

      <div>
        {addons.length > 0 ? (<Fragment>
          {addons.map((addon, index)=> (<Addon addon={addon} key={index} setSelectedAddon={setSelectedAddon} selectedAddon={selectedAddon} selectedPlan={selectedPlan}/>))}
        </Fragment>): null}
      </div>
      <Action text={'Next Step'} btnColor={'bg-dark'} link={'/summary'}/>
    </div>
  )
}

Addons.propTypes = {
  addons: PropTypes.array.isRequired,
  setSelectedAddon: PropTypes.func.isRequired,
  selectedAddon: PropTypes.array.isRequired,
  selectedPlan: PropTypes.object.isRequired,
}

export default Addons
