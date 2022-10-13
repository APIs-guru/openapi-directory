package shared

type SingleBetRequestBody struct {
	DelayedBetID *string `json:"delayedBetId"`
	FreeBetID    *string `json:"freeBetId"`
	PriceDen     *int64  `json:"priceDen"`
	PriceNum     *int64  `json:"priceNum"`
	PriceType    string  `json:"priceType"`
	SelectionID  string  `json:"selectionId"`
	Stake        float64 `json:"stake"`
	Type         string  `json:"type"`
}
