package shared

type Transaction struct {
	ClientID        *string  `json:"client_id"`
	CreatedAt       *string  `json:"created_at"`
	ID              *string  `json:"id"`
	LocationID      *string  `json:"location_id"`
	OrderID         *string  `json:"order_id"`
	Product         *string  `json:"product"`
	ReferenceID     *string  `json:"reference_id"`
	Refunds         []Refund `json:"refunds"`
	ShippingAddress *Address `json:"shipping_address"`
	Tenders         []Tender `json:"tenders"`
}
