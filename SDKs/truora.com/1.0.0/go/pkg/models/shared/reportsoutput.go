package shared



type ReportsOutput struct {
    Next *string `json:"next,omitempty"`
    Reports []Report `json:"reports"`
    Self string `json:"self"`
    
}

