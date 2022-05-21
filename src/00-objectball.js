const gameObject = () => (
    {    
    home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: [
            {
            playerName: 'Alan Anderson',
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
            },
            {
            playerName: 'Reggie Evans',
            number: 30,
            shoe: 14, 
            points: 12, 
            rebounds: 12, 
            assists: 12, 
            steals: 12, 
            blocks: 12, 
            slamDunks:7
            },
            {
            playerName: 'Brook Lopez',
            number: 11,
            shoe: 17, 
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3, 
            blocks: 1,
            slamDunks: 15
            },
            {
            playerName: 'Mason Plumlee',
            number: 1,
            shoe: 19, 
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
            },
            {
            playerName: 'Jason Terry',
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
            }
        ]
    },
    away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players:[
            {
            playerName: 'Jeff Adrien',
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
            },
            {
            playerName: 'Bismak Biyombo',
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
            }, 
            {
            playerName: 'DeSagna Diop',
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 33,
            assists: 3,
            steals: 2,
            blocks: 1,
            slamDunks: 0
            },
            {
            playerName: 'Ben Gordon',
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
            },
            {
            playerName: 'Brendan Haywood',
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
            }
        ]
    }
})

const numPointsScored = (name) => {
    const players = () => [...gameObject().home.players, ...gameObject().away.players]
    const player = (name) => players().find(player => player.playerName === name)
    return player(name).points
}

const shoeSize = (name) => {
    const players = () => [...gameObject().home.players, ...gameObject().away.players]
    const player = (name) => players().find(player => player.playerName === name)
    return player(name).shoe
}

const teamNames = () => {
    const team1 = () => [...gameObject().home, ...gameObject().away]
    return 
}

const teamColors = (name) => {
    const team1 = () => [...gameObject().home, ...gameObject().away]
    const team2 = (name) => team1().find(team => team.teamName === name)
    return team2(name).colors
}

const playerNumbers = (name) => {
    const players = () => [...gameObject().home.players, ...gameObject().away.players]
    const teams = (name) => players().find(team => team.teamName === name)
    return teams(name).points
}

const playerStats = (name) => {
    const players = () => [...gameObject().home.players, ...gameObject().away.players]
    const player = (name) => players().find(player => player.playerName === name)
    return player(name)
}

const bigShoeRebounds = () => {
    const players = () => [...gameObject().home.players, ...gameObject().away.players]
    //debugger
    let max = players.shoe[0]
    debugger
    for(const value in players.shoe) {
        if (value > max){
            max = value;
            debugger
        }
        if (players.find(size => size.shoe === max)){
            let person = players.find(size => size.shoe === max)
            debugger
            return person.rebounds
        }
    }
}