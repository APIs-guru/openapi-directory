package shared



type DestinationModel struct {
    Country *string `json:"country,omitempty"`
    Os *string `json:"os,omitempty"`
    URL string `json:"url"`
    
}

