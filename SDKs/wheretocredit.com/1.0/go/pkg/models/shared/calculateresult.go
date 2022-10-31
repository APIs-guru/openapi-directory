package shared



type CalculateResult struct {
    ErrorMessage *string `json:"errorMessage,omitempty"`
    Success *bool `json:"success,omitempty"`
    Value *CalculateItineraryResult `json:"value,omitempty"`
    
}

