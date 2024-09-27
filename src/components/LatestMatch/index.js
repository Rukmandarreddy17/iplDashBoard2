import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch
  console.log(latestMatch)

  return (
    <div className="latestMatch">
      <div>
        <p className="teamName">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        className="teamLogo2"
        src={competingTeamLogo}
        alt="latest match {competingTeam}"
      />
      <div className="c1">
        <p className="date">First Innings</p>
        <p className="venue">{firstInnings}</p>
        <p className="date">Second Innings</p>
        <p className="venue">{secondInnings}</p>
        <p className="date">Man Of The Match</p>
        <p className="venue">{manOfTheMatch}</p>
        <p className="date">Umpires</p>
        <p className="venue">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
