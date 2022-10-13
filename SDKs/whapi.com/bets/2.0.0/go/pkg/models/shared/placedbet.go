package shared

type PlacedBet struct {
	CashinValue      *float64       `json:"cashinValue"`
	EstimatedReturns float64        `json:"estimatedReturns"`
	FreeBetValue     *float64       `json:"freeBetValue"`
	ID               string         `json:"id"`
	Legs             []PlacedBetLeg `json:"legs"`
	NumLines         *int64         `json:"numLines"`
	NumSelections    *int64         `json:"numSelections"`
	Receipt          *string        `json:"receipt"`
	Settled          bool           `json:"settled"`
	Stake            float64        `json:"stake"`
	StakePerLine     *float64       `json:"stakePerLine"`
	Status           string         `json:"status"`
	TransDateTime    string         `json:"transDateTime"`
	TypeCode         string         `json:"typeCode"`
	TypeName         string         `json:"typeName"`
	Winnings         float64        `json:"winnings"`
}
