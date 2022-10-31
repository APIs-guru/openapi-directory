package shared



type RulesResponseMetadata struct {
    Sent string `json:"sent"`
    Summary map[string]interface{} `json:"summary,omitempty"`
    
}

