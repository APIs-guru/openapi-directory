package shared



type Betslippart struct {
    EachWayAvailable *bool `json:"eachWayAvailable,omitempty"`
    IncludeInMultiple bool `json:"includeInMultiple"`
    LegGroup *int64 `json:"legGroup,omitempty"`
    PriceChanged *bool `json:"priceChanged,omitempty"`
    PriceDen int64 `json:"priceDen"`
    PriceNum int64 `json:"priceNum"`
    PriceType int64 `json:"priceType"`
    SelectionID int64 `json:"selectionId"`
    SingleAvailable *bool `json:"singleAvailable,omitempty"`
    StartingPriceAvailable *bool `json:"startingPriceAvailable,omitempty"`
    Status *string `json:"status,omitempty"`
    StatusChanged *bool `json:"statusChanged,omitempty"`
    
}

