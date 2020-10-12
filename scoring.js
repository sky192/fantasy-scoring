const calculateScore = (player) => {
  switch (player.position) {
    case 'QB':
      return passingScore(player) + rushingScore(player)
    case 'RB':
      return rushingScore(player) + receivingScore(player) + krScore(player) + prScore(player)
    case 'WR':
      return rushingScore(player) + receivingScore(player) + krScore(player) + prScore(player)
    case 'TE':
      return receivingScore(player)
    default:
      return 0
  }
}

const passingScore = (player) => {
  const yards = player.stats.passing.yards / 25
  const touchDowns = player.stats.passing.touchdowns * 6
  const interceptions = player.stats.passing.interceptions * 3

  return yards + touchDowns - interceptions
}


const rushingScore = (player) => {
  const yards = player.stats.rushing.yards / 10
  const touchDowns = player.stats.rushing.touchdowns * 6
  const fumbles = player.stats.rushing.fumbles * 3

  return yards + touchDowns - fumbles
}
const receivingScore = (player) => {
  const yards = player.stats.receiving.yards / 10
  const touchDowns = player.stats.receiving.touchdowns * 6
  const receptions = player.stats.receiving.receptions
  const fumbles = player.stats.receiving.fumbles * 3

  return yards + touchDowns + receptions - fumbles
}
const krScore = (player) => {
  const yards = player.stats.return.kickreturn.yards / 15
  const touchDowns = player.stats.return.kickreturn.touchdowns * 6
  const fumbles = player.stats.return.kickreturn.fumbles * 3

  return yards + touchDowns - fumbles
}
const prScore = (player) => {
  const yards = player.stats.return.puntreturn.yards / 15
  const touchDowns = player.stats.return.puntreturn.touchdowns * 6
  const fumbles = player.stats.return.puntreturn.fumbles * 3

  return yards + touchDowns - fumbles
}

module.exports = calculateScore
