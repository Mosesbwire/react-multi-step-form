import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Addon from './Addon'
import Action from './Actions'

const Addons = ({setSelectedAddon, selectedAddon, setPage, page}) => {
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
  return (
    <div className='card-info'>
      <h1 className='primary-title'>Pick add-ons</h1>
      <p className='secondary-title'>Add-ons help enhance your gaming experience.</p>

      <div>
        {addons.length > 0 ? (<Fragment>
          {addons.map((addon, index)=> (<Addon addon={addon} key={index} setSelectedAddon={setSelectedAddon} selectedAddon={selectedAddon} />))}
        </Fragment>): null}
      </div>
      <Action text={'Next Step'} btnColor={'bg-dark'} setPage={setPage} page={page}/>
    </div>
  )
}

Addons.propTypes = {
  setSelectedAddon: PropTypes.func.isRequired,
  selectedAddon: PropTypes.array.isRequired,
  
}

export default Addons
