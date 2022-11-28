package shared

type TeamEventStatusPlayoffLevelEnum string

const (
	TeamEventStatusPlayoffLevelEnumQm TeamEventStatusPlayoffLevelEnum = "qm"
	TeamEventStatusPlayoffLevelEnumEf TeamEventStatusPlayoffLevelEnum = "ef"
	TeamEventStatusPlayoffLevelEnumQf TeamEventStatusPlayoffLevelEnum = "qf"
	TeamEventStatusPlayoffLevelEnumSf TeamEventStatusPlayoffLevelEnum = "sf"
	TeamEventStatusPlayoffLevelEnumF  TeamEventStatusPlayoffLevelEnum = "f"
)

type TeamEventStatusPlayoffStatusEnum string

const (
	TeamEventStatusPlayoffStatusEnumWon        TeamEventStatusPlayoffStatusEnum = "won"
	TeamEventStatusPlayoffStatusEnumEliminated TeamEventStatusPlayoffStatusEnum = "eliminated"
	TeamEventStatusPlayoffStatusEnumPlaying    TeamEventStatusPlayoffStatusEnum = "playing"
)

// TeamEventStatusPlayoff
// Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun.
type TeamEventStatusPlayoff struct {
	CurrentLevelRecord *WltRecord                        `json:"current_level_record,omitempty"`
	Level              *TeamEventStatusPlayoffLevelEnum  `json:"level,omitempty"`
	PlayoffAverage     *int64                            `json:"playoff_average,omitempty"`
	Record             *WltRecord                        `json:"record,omitempty"`
	Status             *TeamEventStatusPlayoffStatusEnum `json:"status,omitempty"`
}
