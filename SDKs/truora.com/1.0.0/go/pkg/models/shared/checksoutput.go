package shared



type ChecksOutput struct {
    Checks []Check `json:"checks"`
    Next *string `json:"next,omitempty"`
    Self string `json:"self"`
    
}

