package shared



type GroupConfiguration struct {
    Co2Emission *float64 `json:"co2Emission,omitempty"`
    EnergyCost *float64 `json:"energyCost,omitempty"`
    GroupNameFilter *string `json:"groupNameFilter,omitempty"`
    
}

