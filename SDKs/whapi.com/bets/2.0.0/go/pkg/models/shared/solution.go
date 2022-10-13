package shared

type Solution struct {
	BetNum            *string `json:"betNum"`
	EventID           *string `json:"eventId"`
	Handicap          *string `json:"handicap"`
	HandicapPrecision *string `json:"handicapPrecision"`
	PriceDen          *string `json:"priceDen"`
	PriceNum          *string `json:"priceNum"`
	SelectionHandicap *string `json:"selectionHandicap"`
	SelectionID       *string `json:"selectionId"`
}
