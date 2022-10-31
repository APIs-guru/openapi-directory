package shared

type V1PaymentItemization struct {
	DiscountMoney       *V1Money             `json:"discount_money,omitempty"`
	Discounts           []V1PaymentDiscount  `json:"discounts,omitempty"`
	GrossSalesMoney     *V1Money             `json:"gross_sales_money,omitempty"`
	ItemDetail          *V1PaymentItemDetail `json:"item_detail,omitempty"`
	ItemVariationName   *string              `json:"item_variation_name,omitempty"`
	ItemizationType     *string              `json:"itemization_type,omitempty"`
	Modifiers           []V1PaymentModifier  `json:"modifiers,omitempty"`
	Name                *string              `json:"name,omitempty"`
	NetSalesMoney       *V1Money             `json:"net_sales_money,omitempty"`
	Notes               *string              `json:"notes,omitempty"`
	Quantity            *float64             `json:"quantity,omitempty"`
	SingleQuantityMoney *V1Money             `json:"single_quantity_money,omitempty"`
	Taxes               []V1PaymentTax       `json:"taxes,omitempty"`
	TotalMoney          *V1Money             `json:"total_money,omitempty"`
}
