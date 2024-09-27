import './index.css'

const MatchCard = props => {
  const {eachCard} = props
  const {competingTeamLogo, competingTeam, result, matchStatus, id} = eachCard
  const decisionClass = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="listItemContainer">
      <img
        className="logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="name">{competingTeam}</p>
      <p className="result2">{result}</p>
      <p className={decisionClass}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
