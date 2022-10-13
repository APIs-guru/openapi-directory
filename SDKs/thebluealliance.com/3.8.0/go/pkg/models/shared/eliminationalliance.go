package shared

type EliminationAllianceBackup struct {
	In  *string `json:"in"`
	Out *string `json:"out"`
}

type EliminationAllianceStatus struct {
	CurrentLevelRecord *WltRecord `json:"current_level_record"`
	Level              *string    `json:"level"`
	PlayoffAverage     *float64   `json:"playoff_average"`
	Record             *WltRecord `json:"record"`
	Status             *string    `json:"status"`
}

type EliminationAlliance struct {
	Backup   *EliminationAllianceBackup `json:"backup"`
	Declines []string                   `json:"declines"`
	Name     *string                    `json:"name"`
	Picks    []string                   `json:"picks"`
	Status   *EliminationAllianceStatus `json:"status"`
}
