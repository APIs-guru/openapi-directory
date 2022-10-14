package shared

type OrderLineItem struct {
	AppliedDiscounts         []OrderLineItemAppliedDiscount  `json:"applied_discounts,omitempty"`
	AppliedTaxes             []OrderLineItemAppliedTax       `json:"applied_taxes,omitempty"`
	BasePriceMoney           *Money                          `json:"base_price_money,omitempty"`
	CatalogObjectID          *string                         `json:"catalog_object_id,omitempty"`
	CatalogVersion           *int64                          `json:"catalog_version,omitempty"`
	GrossSalesMoney          *Money                          `json:"gross_sales_money,omitempty"`
	ItemType                 *string                         `json:"item_type,omitempty"`
	Metadata                 map[string]string               `json:"metadata,omitempty"`
	Modifiers                []OrderLineItemModifier         `json:"modifiers,omitempty"`
	Name                     *string                         `json:"name,omitempty"`
	Note                     *string                         `json:"note,omitempty"`
	PricingBlocklists        *OrderLineItemPricingBlocklists `json:"pricing_blocklists,omitempty"`
	Quantity                 string                          `json:"quantity"`
	QuantityUnit             *OrderQuantityUnit              `json:"quantity_unit,omitempty"`
	TotalDiscountMoney       *Money                          `json:"total_discount_money,omitempty"`
	TotalMoney               *Money                          `json:"total_money,omitempty"`
	TotalTaxMoney            *Money                          `json:"total_tax_money,omitempty"`
	UID                      *string                         `json:"uid,omitempty"`
	VariationName            *string                         `json:"variation_name,omitempty"`
	VariationTotalPriceMoney *Money                          `json:"variation_total_price_money,omitempty"`
}
