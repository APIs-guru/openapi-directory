package shared



type State struct {
    Names map[string]string `json:"names,omitempty"`
    StateCode *string `json:"stateCode,omitempty"`
    
}

