import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const Addon = ({addon, setSelectedAddon, selectedAddon, selectedPlan}) => {
  const [isChecked, setIsChecked ] = useState(false)
  useEffect(() => {

    selectedAddon.map(el => {
      if (el.name === addon.name){
        setIsChecked(true)
      }
    })

  }, [selectedAddon])

  const onChange = () => {
    if (isChecked){
      
      setSelectedAddon(current => 
        current.filter(element => {
          return element.name !== addon.name
        }))
        setIsChecked(false)
    } else {
      setSelectedAddon([...selectedAddon, addon])

    }

  }
  return (
    <div className='flex-container addon'>
      <input className='checkbox' type='checkbox' checked={isChecked} onChange={e => onChange()}/>
      <div className='flex-container addon-info'>
        <div>
          <p className='blue-text addon-title'>{addon.name}</p>
          <p className='light-text'>{addon.description}</p>
        </div>
        <p className='purple-text'>+${addon.monthlyRate}</p>
      </div>
    </div>
  )
}

Addon.propTypes = {
  addon: PropTypes.object.isRequired,
  setSelectedAddon: PropTypes.func.isRequired,
  selectedAddon: PropTypes.array.isRequired,
  selectedPlan: PropTypes.object.isRequired,
}

export default Addon
