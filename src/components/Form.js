import React, {useState} from 'react'
import PropTypes from 'prop-types'
import PersonalInfo from './PersonalInfo'
import Plans from './Plans'
import Addons from './Addons'
import Summary from './Summary'
import Thankyou from './Thankyou'


const Form = ({setPlan, selectedPlan, setSelectedAddon, selectedAddon}) => {
    const [page, setPage] = useState(0)

    

    const pages = [
        <PersonalInfo setPage={setPage} page={page}/>,
        <Plans setPlan={setPlan} selectedPlan={selectedPlan} setPage={setPage} page={page}/>,
        <Addons setSelectedAddon={setSelectedAddon} selectedAddon={selectedAddon} setPage={setPage} page={page}/>,
        <Summary selectedPlan={selectedPlan} selectedAddon={selectedAddon} setPage={setPage} page={page}/>,
        <Thankyou/>
    ]
  return (
    <div>
      {pages[page]}
    </div>
  )
}

Form.propTypes = {
    setPlan: PropTypes.func.isRequired,
    selectedPlan: PropTypes.object.isRequired,
    setSelectedAddon: PropTypes.func.isRequired,
    selectedAddon: PropTypes.array.isRequired,
}

export default Form
