package shared

type Transaction struct {
	ClientID        *string  `json:"client_id,omitempty"`
	CreatedAt       *string  `json:"created_at,omitempty"`
	ID              *string  `json:"id,omitempty"`
	LocationID      *string  `json:"location_id,omitempty"`
	OrderID         *string  `json:"order_id,omitempty"`
	Product         *string  `json:"product,omitempty"`
	ReferenceID     *string  `json:"reference_id,omitempty"`
	Refunds         []Refund `json:"refunds,omitempty"`
	ShippingAddress *Address `json:"shipping_address,omitempty"`
	Tenders         []Tender `json:"tenders,omitempty"`
}
