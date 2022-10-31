package shared



type CalculateItineraryProgramResult struct {
    Airlines []string `json:"airlines,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    RevenueBased *bool `json:"revenueBased,omitempty"`
    Unpublished *bool `json:"unpublished,omitempty"`
    Value *int32 `json:"value,omitempty"`
    
}

