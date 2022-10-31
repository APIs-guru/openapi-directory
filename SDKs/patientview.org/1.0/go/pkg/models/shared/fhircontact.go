package shared



type FhirContact struct {
    ID *int64 `json:"id,omitempty"`
    System *string `json:"system,omitempty"`
    Use *string `json:"use,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

