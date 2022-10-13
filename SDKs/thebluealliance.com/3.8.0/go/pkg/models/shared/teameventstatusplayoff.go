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

type TeamEventStatusPlayoff struct {
	CurrentLevelRecord *WltRecord                        `json:"current_level_record"`
	Level              *TeamEventStatusPlayoffLevelEnum  `json:"level"`
	PlayoffAverage     *int64                            `json:"playoff_average"`
	Record             *WltRecord                        `json:"record"`
	Status             *TeamEventStatusPlayoffStatusEnum `json:"status"`
}
