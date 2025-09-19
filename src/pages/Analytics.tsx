import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Analytics = () => {
  const [selectedSport, setSelectedSport] = useState("soccer");

  const soccerData = {
    competitions: {
      worldcup: {
        name: "FIFA World Cup",
        teams: {
          "brazil": { name: "Brazil", points: 45, wins: 14, draws: 3, losses: 1, goalsFor: 42, goalsAgainst: 12, topScorer: "Neymar Jr. (8 goals)", assists: "Vinícius Jr. (6 assists)", ranking: 1 },
          "argentina": { name: "Argentina", points: 43, wins: 13, draws: 4, losses: 1, goalsFor: 38, goalsAgainst: 10, topScorer: "Lionel Messi (7 goals)", assists: "Ángel Di María (5 assists)", ranking: 2 },
          "france": { name: "France", points: 41, wins: 12, draws: 5, losses: 1, goalsFor: 35, goalsAgainst: 11, topScorer: "Kylian Mbappé (9 goals)", assists: "Antoine Griezmann (4 assists)", ranking: 3 },
          "england": { name: "England", points: 38, wins: 11, draws: 5, losses: 2, goalsFor: 32, goalsAgainst: 13, topScorer: "Harry Kane (6 goals)", assists: "Bukayo Saka (4 assists)", ranking: 4 },
          "spain": { name: "Spain", points: 37, wins: 11, draws: 4, losses: 3, goalsFor: 31, goalsAgainst: 15, topScorer: "Pedri (5 goals)", assists: "Gavi (3 assists)", ranking: 5 },
          "netherlands": { name: "Netherlands", points: 35, wins: 10, draws: 5, losses: 3, goalsFor: 29, goalsAgainst: 16, topScorer: "Memphis Depay (5 goals)", assists: "Frenkie de Jong (4 assists)", ranking: 6 },
          "portugal": { name: "Portugal", points: 34, wins: 10, draws: 4, losses: 4, goalsFor: 28, goalsAgainst: 17, topScorer: "Cristiano Ronaldo (4 goals)", assists: "Bruno Fernandes (5 assists)", ranking: 7 },
          "italy": { name: "Italy", points: 32, wins: 9, draws: 5, losses: 4, goalsFor: 26, goalsAgainst: 18, topScorer: "Federico Chiesa (3 goals)", assists: "Lorenzo Insigne (4 assists)", ranking: 8 }
        }
      },
      championsleague: {
        name: "UEFA Champions League 2024-25 (Knockout Stage)",
        teams: {
          "liverpool": { name: "Liverpool", points: 21, wins: 7, draws: 0, losses: 0, goalsFor: 17, goalsAgainst: 2, topScorer: "Mohamed Salah (8 goals)", assists: "Cody Gakpo (4 assists)", ranking: 1 },
          "barcelona": { name: "FC Barcelona", points: 18, wins: 6, draws: 0, losses: 1, goalsFor: 26, goalsAgainst: 8, topScorer: "Robert Lewandowski (9 goals)", assists: "Raphinha (5 assists)", ranking: 2 },
          "arsenal": { name: "Arsenal", points: 16, wins: 5, draws: 1, losses: 1, goalsFor: 15, goalsAgainst: 3, topScorer: "Kai Havertz (5 goals)", assists: "Bukayo Saka (4 assists)", ranking: 3 },
          "inter-milan": { name: "Inter Milan", points: 16, wins: 5, draws: 1, losses: 1, goalsFor: 10, goalsAgainst: 2, topScorer: "Lautaro Martínez (4 goals)", assists: "Nicolò Barella (3 assists)", ranking: 4 },
          "atletico-madrid": { name: "Atlético Madrid", points: 15, wins: 5, draws: 0, losses: 2, goalsFor: 13, goalsAgainst: 8, topScorer: "Antoine Griezmann (4 goals)", assists: "Koke (3 assists)", ranking: 5 },
          "ac-milan": { name: "AC Milan", points: 15, wins: 5, draws: 0, losses: 2, goalsFor: 12, goalsAgainst: 9, topScorer: "Rafael Leão (3 goals)", assists: "Christian Pulisic (4 assists)", ranking: 6 },
          "atalanta": { name: "Atalanta", points: 14, wins: 4, draws: 2, losses: 1, goalsFor: 16, goalsAgainst: 4, topScorer: "Ademola Lookman (5 goals)", assists: "Charles De Ketelaere (3 assists)", ranking: 7 },
          "bayer-leverkusen": { name: "Bayer Leverkusen", points: 13, wins: 4, draws: 1, losses: 2, goalsFor: 14, goalsAgainst: 7, topScorer: "Florian Wirtz (4 goals)", assists: "Granit Xhaka (3 assists)", ranking: 8 }
        }
      },
      europaleague: {
        name: "UEFA Europa League", 
        teams: {
          "west-ham": { name: "West Ham United", points: 15, wins: 5, draws: 0, losses: 1, goalsFor: 18, goalsAgainst: 6, topScorer: "Jarrod Bowen (7 goals)", assists: "Pablo Fornals (4 assists)", ranking: 1 },
          "sevilla": { name: "Sevilla FC", points: 12, wins: 4, draws: 0, losses: 2, goalsFor: 14, goalsAgainst: 8, topScorer: "Youssef En-Nesyri (5 goals)", assists: "Ivan Rakitić (3 assists)", ranking: 2 },
          "roma": { name: "AS Roma", points: 12, wins: 4, draws: 0, losses: 2, goalsFor: 13, goalsAgainst: 9, topScorer: "Tammy Abraham (6 goals)", assists: "Lorenzo Pellegrini (4 assists)", ranking: 3 },
          "leicester": { name: "Leicester City", points: 9, wins: 3, draws: 0, losses: 3, goalsFor: 11, goalsAgainst: 12, topScorer: "Jamie Vardy (4 goals)", assists: "James Maddison (3 assists)", ranking: 4 }
        }
      }
    },
    upcomingMatches: [
      { home: "Argentina", away: "Peru", date: "2025-09-20", time: "21:00", competition: "World Cup Qualifiers" },
      { home: "Liverpool", away: "Real Madrid", date: "2025-09-22", time: "20:00", competition: "Champions League Round of 16" },
      { home: "Barcelona", away: "PSG", date: "2025-09-23", time: "21:00", competition: "Champions League Round of 16" },
      { home: "Arsenal", away: "Bayern Munich", date: "2025-09-24", time: "20:00", competition: "Champions League Round of 16" },
      { home: "Inter Milan", away: "Manchester City", date: "2025-09-25", time: "21:00", competition: "Champions League Round of 16" }
    ]
  };

  const basketballData = {
    competitions: {
      nba: {
        name: "NBA 2024-25 Season (Regular Season)",
        teams: {
          "cleveland-cavaliers": { name: "Cleveland Cavaliers", wins: 12, losses: 0, points: 121.8, pointsAgainst: 109.4, topScorer: "Donovan Mitchell (24.3 PPG)", rebounds: "Jarrett Allen (10.5 RPG)", assists: "Darius Garland (6.5 APG)", ranking: 1, startingLineup: ["Darius Garland", "Donovan Mitchell", "Isaac Okoro", "Evan Mobley", "Jarrett Allen"] },
          "boston-celtics": { name: "Boston Celtics", wins: 9, losses: 3, points: 120.2, pointsAgainst: 110.6, topScorer: "Jayson Tatum (29.7 PPG)", rebounds: "Jayson Tatum (8.2 RPG)", assists: "Jaylen Brown (4.7 APG)", ranking: 2, startingLineup: ["Jrue Holiday", "Derrick White", "Jaylen Brown", "Jayson Tatum", "Al Horford"] },
          "oklahoma-city-thunder": { name: "Oklahoma City Thunder", wins: 9, losses: 2, points: 117.4, pointsAgainst: 105.8, topScorer: "Shai Gilgeous-Alexander (28.7 PPG)", rebounds: "Chet Holmgren (8.7 RPG)", assists: "Shai Gilgeous-Alexander (6.5 APG)", ranking: 3, startingLineup: ["Shai Gilgeous-Alexander", "Josh Giddey", "Jalen Williams", "Chet Holmgren", "Isaiah Hartenstein"] },
          "golden-state-warriors": { name: "Golden State Warriors", wins: 9, losses: 2, points: 118.6, pointsAgainst: 106.8, topScorer: "Stephen Curry (22.4 PPG)", rebounds: "Draymond Green (8.9 RPG)", assists: "Stephen Curry (6.2 APG)", ranking: 4, startingLineup: ["Stephen Curry", "Klay Thompson", "Andrew Wiggins", "Draymond Green", "Kevon Looney"] },
          "phoenix-suns": { name: "Phoenix Suns", wins: 8, losses: 2, points: 116.1, pointsAgainst: 107.7, topScorer: "Kevin Durant (27.6 PPG)", rebounds: "Jusuf Nurkić (9.8 RPG)", assists: "Devin Booker (6.1 APG)", ranking: 5, startingLineup: ["Tyus Jones", "Devin Booker", "Bradley Beal", "Kevin Durant", "Jusuf Nurkić"] },
          "denver-nuggets": { name: "Denver Nuggets", wins: 7, losses: 4, points: 115.9, pointsAgainst: 108.2, topScorer: "Nikola Jokić (29.7 PPG)", rebounds: "Nikola Jokić (13.7 RPG)", assists: "Nikola Jokić (11.7 APG)", ranking: 6, startingLineup: ["Jamal Murray", "Christian Braun", "Michael Porter Jr.", "Aaron Gordon", "Nikola Jokić"] },
          "los-angeles-lakers": { name: "Los Angeles Lakers", wins: 6, losses: 4, points: 112.8, pointsAgainst: 109.5, topScorer: "Anthony Davis (30.8 PPG)", rebounds: "Anthony Davis (11.2 RPG)", assists: "LeBron James (7.5 APG)", ranking: 7, startingLineup: ["D'Angelo Russell", "Austin Reaves", "LeBron James", "Rui Hachimura", "Anthony Davis"] },
          "miami-heat": { name: "Miami Heat", wins: 5, losses: 6, points: 108.4, pointsAgainst: 107.9, topScorer: "Tyler Herro (24.5 PPG)", rebounds: "Bam Adebayo (9.7 RPG)", assists: "Tyler Herro (5.1 APG)", ranking: 8, startingLineup: ["Terry Rozier", "Tyler Herro", "Jimmy Butler", "Haywood Highsmith", "Bam Adebayo"] }
        }
      }
    },
    upcomingMatches: [
      { home: "Boston Celtics", away: "Cleveland Cavaliers", date: "2025-09-20", time: "20:00", competition: "NBA Regular Season" },
      { home: "Oklahoma City Thunder", away: "Denver Nuggets", date: "2025-09-21", time: "22:00", competition: "NBA Regular Season" },
      { home: "Phoenix Suns", away: "Golden State Warriors", date: "2025-09-22", time: "22:30", competition: "NBA Regular Season" },
      { home: "Los Angeles Lakers", away: "Miami Heat", date: "2025-09-23", time: "22:00", competition: "NBA Regular Season" },
      { home: "Milwaukee Bucks", away: "Philadelphia 76ers", date: "2025-09-24", time: "20:00", competition: "NBA Regular Season" }
    ]
  };

  const footballData = {
    competitions: {
      afceast: {
        name: "AFC East",
        teams: {
          "buffalo-bills": { name: "Buffalo Bills", wins: 9, losses: 2, pointsFor: 354, pointsAgainst: 221, topScorer: "Josh Allen (18 TDs)", rushingYards: "Josh Allen (313 yards)", passingYards: "Josh Allen (2,543 yards)", fantasyPoints: 198.4, ranking: 1, division: "AFC East" },
          "miami-dolphins": { name: "Miami Dolphins", wins: 4, losses: 6, pointsFor: 241, pointsAgainst: 279, topScorer: "Tyreek Hill (6 TDs)", rushingYards: "De'Von Achane (462 yards)", passingYards: "Tua Tagovailoa (1,499 yards)", fantasyPoints: 142.8, ranking: 2, division: "AFC East" },
          "new-york-jets": { name: "New York Jets", wins: 3, losses: 8, pointsFor: 201, pointsAgainst: 244, topScorer: "Davante Adams (5 TDs)", rushingYards: "Breece Hall (567 yards)", passingYards: "Aaron Rodgers (2,145 yards)", fantasyPoints: 121.2, ranking: 3, division: "AFC East" },
          "new-england-patriots": { name: "New England Patriots", wins: 3, losses: 8, pointsFor: 174, pointsAgainst: 263, topScorer: "Rhamondre Stevenson (4 TDs)", rushingYards: "Rhamondre Stevenson (622 yards)", passingYards: "Drake Maye (1,236 yards)", fantasyPoints: 98.6, ranking: 4, division: "AFC East" }
        }
      },
      afcnorth: {
        name: "AFC North",
        teams: {
          "pittsburgh-steelers": { name: "Pittsburgh Steelers", wins: 8, losses: 2, pointsFor: 259, pointsAgainst: 176, topScorer: "Najee Harris (7 TDs)", rushingYards: "Najee Harris (708 yards)", passingYards: "Russell Wilson (1,212 yards)", fantasyPoints: 167.3, ranking: 1, division: "AFC North" },
          "baltimore-ravens": { name: "Baltimore Ravens", wins: 7, losses: 4, pointsFor: 299, pointsAgainst: 254, topScorer: "Lamar Jackson (15 TDs)", rushingYards: "Lamar Jackson (538 yards)", passingYards: "Lamar Jackson (2,379 yards)", fantasyPoints: 184.2, ranking: 2, division: "AFC North" },
          "cincinnati-bengals": { name: "Cincinnati Bengals", wins: 4, losses: 7, pointsFor: 244, pointsAgainst: 244, topScorer: "Joe Burrow (12 TDs)", rushingYards: "Chase Brown (456 yards)", passingYards: "Joe Burrow (2,672 yards)", fantasyPoints: 145.6, ranking: 3, division: "AFC North" },
          "cleveland-browns": { name: "Cleveland Browns", wins: 2, losses: 8, pointsFor: 168, pointsAgainst: 252, topScorer: "Nick Chubb (3 TDs)", rushingYards: "Nick Chubb (331 yards)", passingYards: "Jameis Winston (1,047 yards)", fantasyPoints: 89.4, ranking: 4, division: "AFC North" }
        }
      },
      nfceast: {
        name: "NFC East",  
        teams: {
          "philadelphia-eagles": { name: "Philadelphia Eagles", wins: 8, losses: 2, pointsFor: 281, pointsAgainst: 190, topScorer: "Saquon Barkley (8 TDs)", rushingYards: "Saquon Barkley (1,137 yards)", passingYards: "Jalen Hurts (2,278 yards)", fantasyPoints: 189.7, ranking: 1, division: "NFC East" },
          "washington-commanders": { name: "Washington Commanders", wins: 7, losses: 4, pointsFor: 307, pointsAgainst: 242, topScorer: "Jayden Daniels (12 TDs)", rushingYards: "Brian Robinson Jr. (461 yards)", passingYards: "Jayden Daniels (2,147 yards)", fantasyPoints: 172.8, ranking: 2, division: "NFC East" },
          "dallas-cowboys": { name: "Dallas Cowboys", wins: 3, losses: 7, pointsFor: 210, pointsAgainst: 266, topScorer: "CeeDee Lamb (4 TDs)", rushingYards: "Rico Dowdle (374 yards)", passingYards: "Dak Prescott (1,978 yards)", fantasyPoints: 118.5, ranking: 3, division: "NFC East" },
          "new-york-giants": { name: "New York Giants", wins: 2, losses: 8, pointsFor: 175, pointsAgainst: 223, topScorer: "Malik Nabers (3 TDs)", rushingYards: "Tyrone Tracy Jr. (376 yards)", passingYards: "Daniel Jones (2,070 yards)", fantasyPoints: 94.2, ranking: 4, division: "NFC East" }
        }
      },
      nfcnorth: {
        name: "NFC North",
        teams: {
          "detroit-lions": { name: "Detroit Lions", wins: 9, losses: 1, pointsFor: 352, pointsAgainst: 224, topScorer: "Amon-Ra St. Brown (8 TDs)", rushingYards: "Jahmyr Gibbs (708 yards)", passingYards: "Jared Goff (2,353 yards)", fantasyPoints: 213.6, ranking: 1, division: "NFC North" },
          "minnesota-vikings": { name: "Minnesota Vikings", wins: 8, losses: 2, pointsFor: 282, pointsAgainst: 207, topScorer: "Justin Jefferson (7 TDs)", rushingYards: "Aaron Jones (678 yards)", passingYards: "Sam Darnold (2,219 yards)", fantasyPoints: 178.4, ranking: 2, division: "NFC North" },
          "green-bay-packers": { name: "Green Bay Packers", wins: 6, losses: 4, pointsFor: 261, pointsAgainst: 241, topScorer: "Josh Jacobs (6 TDs)", rushingYards: "Josh Jacobs (762 yards)", passingYards: "Jordan Love (1,891 yards)", fantasyPoints: 156.8, ranking: 3, division: "NFC North" },
          "chicago-bears": { name: "Chicago Bears", wins: 4, losses: 6, pointsFor: 232, pointsAgainst: 242, topScorer: "D'Andre Swift (5 TDs)", rushingYards: "D'Andre Swift (523 yards)", passingYards: "Caleb Williams (1,785 yards)", fantasyPoints: 127.9, ranking: 4, division: "NFC North" }
        }
      }
    },
    upcomingMatches: [
      { home: "Kansas City Chiefs", away: "Buffalo Bills", date: "2025-01-26", time: "18:30", competition: "AFC Championship Game" },
      { home: "Philadelphia Eagles", away: "Detroit Lions", date: "2025-01-26", time: "15:00", competition: "NFC Championship Game" },
      { home: "Super Bowl LIX", away: "TBD vs TBD", date: "2025-02-09", time: "18:30", competition: "Super Bowl LIX" },
      { home: "Los Angeles Chargers", away: "Denver Broncos", date: "2025-09-22", time: "20:15", competition: "NFL Week 3 - 2025 Season" },
      { home: "Green Bay Packers", away: "Minnesota Vikings", date: "2025-09-25", time: "13:00", competition: "NFL Week 3 - 2025 Season" }
    ]
  };

  const f1Data = {
    competitions: {
      championship: {
        name: "Formula 1 2024 Championship (Current Season)",
        drivers: {
          "max-verstappen": { name: "Max Verstappen", team: "Red Bull Racing", points: 393, wins: 9, podiums: 15, poles: 8, fastestLaps: 3, ranking: 1 },
          "lando-norris": { name: "Lando Norris", team: "McLaren", points: 331, wins: 3, podiums: 12, poles: 4, fastestLaps: 2, ranking: 2 },
          "charles-leclerc": { name: "Charles Leclerc", team: "Ferrari", points: 307, wins: 2, podiums: 11, poles: 5, fastestLaps: 4, ranking: 3 },
          "oscar-piastri": { name: "Oscar Piastri", team: "McLaren", points: 262, wins: 2, podiums: 7, poles: 0, fastestLaps: 1, ranking: 4 },
          "carlos-sainz": { name: "Carlos Sainz Jr.", team: "Ferrari", points: 244, wins: 1, podiums: 8, poles: 0, fastestLaps: 2, ranking: 5 },
          "george-russell": { name: "George Russell", team: "Mercedes", points: 192, wins: 2, podiums: 4, poles: 3, fastestLaps: 1, ranking: 6 },
          "lewis-hamilton": { name: "Lewis Hamilton", team: "Mercedes", points: 190, wins: 2, podiums: 6, poles: 1, fastestLaps: 1, ranking: 7 },
          "sergio-perez": { name: "Sergio Pérez", team: "Red Bull Racing", points: 151, wins: 0, podiums: 4, poles: 0, fastestLaps: 0, ranking: 8 }
        }
      }
    },
    upcomingRaces: [
      { name: "Bahrain Grand Prix", date: "2025-03-16", time: "15:00", circuit: "Bahrain International Circuit" },
      { name: "Saudi Arabian Grand Prix", date: "2025-03-23", time: "17:00", circuit: "Jeddah Corniche Circuit" },
      { name: "Australian Grand Prix", date: "2025-04-06", time: "06:00", circuit: "Albert Park Circuit" },
      { name: "Chinese Grand Prix", date: "2025-04-20", time: "08:00", circuit: "Shanghai International Circuit" },
      { name: "Miami Grand Prix", date: "2025-05-04", time: "16:00", circuit: "Miami International Autodrome" }
    ]
  };

  const renderCompetitionSection = (sport: string, competitionKey: string, competitionData: any) => {
    return (
      <div key={competitionKey} className="bg-surface rounded-lg p-6 mb-8 border border-border">
        <h2 className="text-2xl font-bold text-primary mb-6">{competitionData.name}</h2>
        
        {/* Full Standings Table */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Full Standings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">Rank</TableHead>
                  <TableHead>Team/Driver</TableHead>
                  {sport === "soccer" && (
                    <>
                      <TableHead>Points</TableHead>
                      <TableHead>W</TableHead>
                      <TableHead>D</TableHead>
                      <TableHead>L</TableHead>
                      <TableHead>GF</TableHead>
                      <TableHead>GA</TableHead>
                      <TableHead>Top Scorer</TableHead>
                    </>
                  )}
                  {sport === "basketball" && (
                    <>
                      <TableHead>W-L</TableHead>
                      <TableHead>PPG</TableHead>
                      <TableHead>PAPG</TableHead>
                      <TableHead>Top Scorer</TableHead>
                      <TableHead>Starting Lineup</TableHead>
                    </>
                  )}
                      {sport === "football" && (
                        <>
                          <TableHead>Division</TableHead>
                          <TableHead>W-L</TableHead>
                          <TableHead>PF</TableHead>
                          <TableHead>PA</TableHead>
                          <TableHead>Fantasy Pts</TableHead>
                          <TableHead>Top Performer</TableHead>
                        </>
                      )}
                  {sport === "f1" && (
                    <>
                      <TableHead>Team</TableHead>
                      <TableHead>Points</TableHead>
                      <TableHead>Wins</TableHead>
                      <TableHead>Podiums</TableHead>
                      <TableHead>Poles</TableHead>
                    </>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(sport === "f1" ? competitionData.drivers : competitionData.teams)
                  .sort(([,a]: any, [,b]: any) => a.ranking - b.ranking)
                  .map(([key, team]: any) => (
                    <TableRow key={key}>
                      <TableCell className="font-medium">
                        <Badge variant={team.ranking <= 3 ? "default" : "secondary"}>
                          #{team.ranking}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-semibold">{team.name}</TableCell>
                      
                      {sport === "soccer" && (
                        <>
                          <TableCell>{team.points}</TableCell>
                          <TableCell>{team.wins}</TableCell>
                          <TableCell>{team.draws}</TableCell>
                          <TableCell>{team.losses}</TableCell>
                          <TableCell>{team.goalsFor}</TableCell>
                          <TableCell>{team.goalsAgainst}</TableCell>
                          <TableCell className="text-sm">{team.topScorer}</TableCell>
                        </>
                      )}
                      
                      {sport === "basketball" && (
                        <>
                          <TableCell>{team.wins}-{team.losses}</TableCell>
                          <TableCell>{team.points}</TableCell>
                          <TableCell>{team.pointsAgainst}</TableCell>
                          <TableCell className="text-sm">{team.topScorer}</TableCell>
                          <TableCell className="text-xs">
                            {team.startingLineup.slice(0, 3).join(", ")}...
                          </TableCell>
                        </>
                      )}
                      
                      {sport === "football" && (
                        <>
                          <TableCell className="text-sm font-medium text-primary">{team.division}</TableCell>
                          <TableCell>{team.wins}-{team.losses}</TableCell>
                          <TableCell>{team.pointsFor}</TableCell>
                          <TableCell>{team.pointsAgainst}</TableCell>
                          <TableCell>{team.fantasyPoints}</TableCell>
                          <TableCell className="text-sm">{team.topScorer}</TableCell>
                        </>
                      )}
                      
                      {sport === "f1" && (
                        <>
                          <TableCell className="text-sm">{team.team}</TableCell>
                          <TableCell className="font-semibold">{team.points}</TableCell>
                          <TableCell>{team.wins}</TableCell>
                          <TableCell>{team.podiums}</TableCell>
                          <TableCell>{team.poles}</TableCell>
                        </>
                      )}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Upcoming Matches/Races */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {sport === "f1" ? "Upcoming Races" : "Upcoming Matches"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {(sport === "f1" ? f1Data.upcomingRaces : 
                sport === "soccer" ? soccerData.upcomingMatches :
                sport === "basketball" ? basketballData.upcomingMatches :
                footballData.upcomingMatches
              ).slice(0, 3).map((match: any, index: number) => (
                <div key={index} className="flex justify-between items-center p-3 bg-card rounded-lg border">
                  <div>
                    {sport === "f1" ? (
                      <>
                        <p className="font-semibold text-primary">{match.name}</p>
                        <p className="text-sm text-muted-foreground">{match.circuit}</p>
                      </>
                    ) : (
                      <>
                        <p className="font-semibold text-primary">{match.home} vs {match.away}</p>
                        <p className="text-sm text-muted-foreground">{match.competition}</p>
                      </>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{match.date}</p>
                    <p className="text-sm text-muted-foreground">{match.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const getCurrentSportData = () => {
    switch (selectedSport) {
      case "soccer": return soccerData;
      case "basketball": return basketballData;
      case "football": return footballData;
      case "f1": return f1Data;
      default: return soccerData;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Sports Analytics</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive statistics, rankings, and upcoming matches across major sports competitions
          </p>
        </div>

        <Tabs value={selectedSport} onValueChange={setSelectedSport} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="soccer" className="text-lg py-3">⚽ Soccer</TabsTrigger>
            <TabsTrigger value="basketball" className="text-lg py-3">🏀 Basketball</TabsTrigger>
            <TabsTrigger value="football" className="text-lg py-3">🏈 Football</TabsTrigger>
            <TabsTrigger value="f1" className="text-lg py-3">🏎️ Formula 1</TabsTrigger>
          </TabsList>

          <TabsContent value="soccer" className="space-y-8">
            {Object.entries(soccerData.competitions).map(([key, competition]) => 
              renderCompetitionSection("soccer", key, competition)
            )}
          </TabsContent>

          <TabsContent value="basketball" className="space-y-8">
            {Object.entries(basketballData.competitions).map(([key, competition]) => 
              renderCompetitionSection("basketball", key, competition)
            )}
          </TabsContent>

          <TabsContent value="football" className="space-y-8">
            {Object.entries(footballData.competitions).map(([key, competition]) => 
              renderCompetitionSection("football", key, competition)
            )}
          </TabsContent>

          <TabsContent value="f1" className="space-y-8">
            {Object.entries(f1Data.competitions).map(([key, competition]) => 
              renderCompetitionSection("f1", key, competition)
            )}
          </TabsContent>
        </Tabs>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">Data Sources & Official Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium text-primary">Soccer</h4>
                <div className="space-y-1">
                  <a href="https://www.fifa.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">FIFA Official</a>
                  <a href="https://www.uefa.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">UEFA Champions League</a>
                  <a href="https://www.espn.com/soccer" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">ESPN Soccer</a>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-primary">Basketball</h4>
                <div className="space-y-1">
                  <a href="https://www.nba.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">NBA Official</a>
                  <a href="https://www.espn.com/nba" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">ESPN NBA</a>
                  <a href="https://www.basketball-reference.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">Basketball Reference</a>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-primary">Football</h4>
                <div className="space-y-1">
                  <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">NFL Official</a>
                  <a href="https://www.espn.com/nfl" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">ESPN NFL</a>
                  <a href="https://www.pro-football-reference.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">Pro Football Reference</a>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-primary">Formula 1</h4>
                <div className="space-y-1">
                  <a href="https://www.formula1.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">Formula 1 Official</a>
                  <a href="https://www.espn.com/f1" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">ESPN F1</a>
                  <a href="https://www.fia.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">FIA Official</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Analytics;