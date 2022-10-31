package shared



type EliminationAllianceBackup struct {
    In *string `json:"in,omitempty"`
    Out *string `json:"out,omitempty"`
    
}

type EliminationAllianceStatus struct {
    CurrentLevelRecord *WltRecord `json:"current_level_record,omitempty"`
    Level *string `json:"level,omitempty"`
    PlayoffAverage *float64 `json:"playoff_average,omitempty"`
    Record *WltRecord `json:"record,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

type EliminationAlliance struct {
    Backup *EliminationAllianceBackup `json:"backup,omitempty"`
    Declines []string `json:"declines,omitempty"`
    Name *string `json:"name,omitempty"`
    Picks []string `json:"picks"`
    Status *EliminationAllianceStatus `json:"status,omitempty"`
    
}

