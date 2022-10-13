package shared

type V1PaymentItemDetail struct {
	CategoryName    *string `json:"category_name"`
	ItemID          *string `json:"item_id"`
	ItemVariationID *string `json:"item_variation_id"`
	Sku             *string `json:"sku"`
}
