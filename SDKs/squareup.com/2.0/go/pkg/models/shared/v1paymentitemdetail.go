package shared

type V1PaymentItemDetail struct {
	CategoryName    *string `json:"category_name,omitempty"`
	ItemID          *string `json:"item_id,omitempty"`
	ItemVariationID *string `json:"item_variation_id,omitempty"`
	Sku             *string `json:"sku,omitempty"`
}
