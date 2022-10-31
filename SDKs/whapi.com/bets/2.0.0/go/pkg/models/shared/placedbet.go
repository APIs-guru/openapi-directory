package shared



type PlacedBet struct {
    CashinValue *float64 `json:"cashinValue,omitempty"`
    EstimatedReturns float64 `json:"estimatedReturns"`
    FreeBetValue *float64 `json:"freeBetValue,omitempty"`
    ID string `json:"id"`
    Legs []PlacedBetLeg `json:"legs,omitempty"`
    NumLines *int64 `json:"numLines,omitempty"`
    NumSelections *int64 `json:"numSelections,omitempty"`
    Receipt *string `json:"receipt,omitempty"`
    Settled bool `json:"settled"`
    Stake float64 `json:"stake"`
    StakePerLine *float64 `json:"stakePerLine,omitempty"`
    Status string `json:"status"`
    TransDateTime string `json:"transDateTime"`
    TypeCode string `json:"typeCode"`
    TypeName string `json:"typeName"`
    Winnings float64 `json:"winnings"`
    
}

