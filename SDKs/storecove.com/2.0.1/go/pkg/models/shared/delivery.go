package shared

type DeliveryLocation struct {
	Address        *Address `json:"address,omitempty"`
	ID             *string  `json:"id,omitempty"`
	SchemeAgencyID *string  `json:"schemeAgencyId,omitempty"`
	SchemeID       *string  `json:"schemeId,omitempty"`
}

type Delivery struct {
	ActualDate *string           `json:"actualDate,omitempty"`
	Location   *DeliveryLocation `json:"location,omitempty"`
	Quantity   *float64          `json:"quantity,omitempty"`
}
