let teams =
`[
  {
      "name":"The Goats",
      "captain":"Ty Dunn",
      "numberOfPlayers":15,
      "teamColor":"blue"
  },
  {
      "name":"Panda Bandits",
      "captain":"Thomas Kochan ",
      "numberOfPlayers":12,
      "teamColor":"green"
  },
  {
    "name":"Red dragons",
    "captain":"Jeff Hamilton ",
    "numberOfPlayers":18,
    "teamColor":"red"
},
{
  "name":"Catalunyas",
  "captain":"Jose Hernandez ",
  "numberOfPlayers":11,
  "teamColor":"grey"
}
]`
console.log(JSON.parse(teams)[3].teamColor);