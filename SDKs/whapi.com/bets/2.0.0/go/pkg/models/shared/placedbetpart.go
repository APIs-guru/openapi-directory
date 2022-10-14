package shared

type PlacedBetPart struct {
	Description            string          `json:"description"`
	EachWayDen             *int64          `json:"eachWayDen,omitempty"`
	EachWayNum             *int64          `json:"eachWayNum,omitempty"`
	EachWayPlaces          *int64          `json:"eachWayPlaces,omitempty"`
	EventDescription       string          `json:"eventDescription"`
	EventID                string          `json:"eventId"`
	EventMarketDescription *string         `json:"eventMarketDescription,omitempty"`
	EventTypeDescription   *string         `json:"eventTypeDescription,omitempty"`
	Handicap               *float64        `json:"handicap,omitempty"`
	Number                 int64           `json:"number"`
	PriceDen               int64           `json:"priceDen"`
	PriceFormatted         *PriceFormatted `json:"priceFormatted,omitempty"`
	PriceNum               int64           `json:"priceNum"`
	PriceType              string          `json:"priceType"`
	Result                 string          `json:"result"`
	Rule4Deductions        *float64        `json:"rule4Deductions,omitempty"`
	SelectionID            *string         `json:"selectionId,omitempty"`
	StartDateTime          string          `json:"startDateTime"`
}
