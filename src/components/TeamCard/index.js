// Write your code here

import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {name, id, teamImageUrl} = eachTeam
  return (
    <Link to={`/team-matches/${id}`} className="teamContainer">
      <li className="l1">
        <img className="teamLogo" src={name} />
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
