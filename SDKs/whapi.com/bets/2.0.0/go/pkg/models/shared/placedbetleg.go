package shared



type PlacedBetLeg struct {
    Number int64 `json:"number"`
    Parts []PlacedBetPart `json:"parts"`
    Sort *string `json:"sort,omitempty"`
    Type string `json:"type"`
    
}

