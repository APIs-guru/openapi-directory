package shared

type TeamEventStatusAlliance struct {
	Backup *TeamEventStatusAllianceBackup `json:"backup"`
	Name   *string                        `json:"name"`
	Number int64                          `json:"number"`
	Pick   int64                          `json:"pick"`
}
