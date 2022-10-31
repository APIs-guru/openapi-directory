package shared



type SingleBetRequestBody struct {
    DelayedBetID *string `json:"delayedBetId,omitempty"`
    FreeBetID *string `json:"freeBetId,omitempty"`
    PriceDen *int64 `json:"priceDen,omitempty"`
    PriceNum *int64 `json:"priceNum,omitempty"`
    PriceType string `json:"priceType"`
    SelectionID string `json:"selectionId"`
    Stake float64 `json:"stake"`
    Type string `json:"type"`
    
}

