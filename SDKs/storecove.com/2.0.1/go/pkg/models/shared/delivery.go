package shared

type DeliveryLocation struct {
	Address        *Address `json:"address"`
	ID             *string  `json:"id"`
	SchemeAgencyID *string  `json:"schemeAgencyId"`
	SchemeID       *string  `json:"schemeId"`
}

type Delivery struct {
	ActualDate *string           `json:"actualDate"`
	Location   *DeliveryLocation `json:"location"`
	Quantity   *float64          `json:"quantity"`
}
