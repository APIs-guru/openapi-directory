package shared

type PlacedBetPart struct {
	Description            string          `json:"description"`
	EachWayDen             *int64          `json:"eachWayDen"`
	EachWayNum             *int64          `json:"eachWayNum"`
	EachWayPlaces          *int64          `json:"eachWayPlaces"`
	EventDescription       string          `json:"eventDescription"`
	EventID                string          `json:"eventId"`
	EventMarketDescription *string         `json:"eventMarketDescription"`
	EventTypeDescription   *string         `json:"eventTypeDescription"`
	Handicap               *float64        `json:"handicap"`
	Number                 int64           `json:"number"`
	PriceDen               int64           `json:"priceDen"`
	PriceFormatted         *PriceFormatted `json:"priceFormatted"`
	PriceNum               int64           `json:"priceNum"`
	PriceType              string          `json:"priceType"`
	Result                 string          `json:"result"`
	Rule4Deductions        *float64        `json:"rule4Deductions"`
	SelectionID            *string         `json:"selectionId"`
	StartDateTime          string          `json:"startDateTime"`
}
