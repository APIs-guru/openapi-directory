package shared



type TeamEventStatusAlliance struct {
    Backup *TeamEventStatusAllianceBackup `json:"backup,omitempty"`
    Name *string `json:"name,omitempty"`
    Number int64 `json:"number"`
    Pick int64 `json:"pick"`
    
}

