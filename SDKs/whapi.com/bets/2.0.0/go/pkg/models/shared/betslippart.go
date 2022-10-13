package shared

type Betslippart struct {
	EachWayAvailable       *bool   `json:"eachWayAvailable"`
	IncludeInMultiple      bool    `json:"includeInMultiple"`
	LegGroup               *int64  `json:"legGroup"`
	PriceChanged           *bool   `json:"priceChanged"`
	PriceDen               int64   `json:"priceDen"`
	PriceNum               int64   `json:"priceNum"`
	PriceType              int64   `json:"priceType"`
	SelectionID            int64   `json:"selectionId"`
	SingleAvailable        *bool   `json:"singleAvailable"`
	StartingPriceAvailable *bool   `json:"startingPriceAvailable"`
	Status                 *string `json:"status"`
	StatusChanged          *bool   `json:"statusChanged"`
}
