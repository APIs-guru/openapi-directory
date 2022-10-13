package shared

type V1PaymentItemization struct {
	DiscountMoney       *V1Money             `json:"discount_money"`
	Discounts           []V1PaymentDiscount  `json:"discounts"`
	GrossSalesMoney     *V1Money             `json:"gross_sales_money"`
	ItemDetail          *V1PaymentItemDetail `json:"item_detail"`
	ItemVariationName   *string              `json:"item_variation_name"`
	ItemizationType     *string              `json:"itemization_type"`
	Modifiers           []V1PaymentModifier  `json:"modifiers"`
	Name                *string              `json:"name"`
	NetSalesMoney       *V1Money             `json:"net_sales_money"`
	Notes               *string              `json:"notes"`
	Quantity            *float64             `json:"quantity"`
	SingleQuantityMoney *V1Money             `json:"single_quantity_money"`
	Taxes               []V1PaymentTax       `json:"taxes"`
	TotalMoney          *V1Money             `json:"total_money"`
}
