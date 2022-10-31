package shared



type Part struct {
    IncludeInMultiple bool `json:"includeInMultiple"`
    PriceDen int64 `json:"priceDen"`
    PriceNum int64 `json:"priceNum"`
    PriceType int64 `json:"priceType"`
    SelectionID int64 `json:"selectionId"`
    
}

