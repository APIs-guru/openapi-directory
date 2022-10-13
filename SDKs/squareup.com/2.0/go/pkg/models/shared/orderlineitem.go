package shared

type OrderLineItem struct {
	AppliedDiscounts         []OrderLineItemAppliedDiscount  `json:"applied_discounts"`
	AppliedTaxes             []OrderLineItemAppliedTax       `json:"applied_taxes"`
	BasePriceMoney           *Money                          `json:"base_price_money"`
	CatalogObjectID          *string                         `json:"catalog_object_id"`
	CatalogVersion           *int64                          `json:"catalog_version"`
	GrossSalesMoney          *Money                          `json:"gross_sales_money"`
	ItemType                 *string                         `json:"item_type"`
	Metadata                 map[string]string               `json:"metadata"`
	Modifiers                []OrderLineItemModifier         `json:"modifiers"`
	Name                     *string                         `json:"name"`
	Note                     *string                         `json:"note"`
	PricingBlocklists        *OrderLineItemPricingBlocklists `json:"pricing_blocklists"`
	Quantity                 string                          `json:"quantity"`
	QuantityUnit             *OrderQuantityUnit              `json:"quantity_unit"`
	TotalDiscountMoney       *Money                          `json:"total_discount_money"`
	TotalMoney               *Money                          `json:"total_money"`
	TotalTaxMoney            *Money                          `json:"total_tax_money"`
	UID                      *string                         `json:"uid"`
	VariationName            *string                         `json:"variation_name"`
	VariationTotalPriceMoney *Money                          `json:"variation_total_price_money"`
}
