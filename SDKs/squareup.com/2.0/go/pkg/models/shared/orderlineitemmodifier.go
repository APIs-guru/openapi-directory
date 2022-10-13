package shared

type OrderLineItemModifier struct {
	BasePriceMoney  *Money  `json:"base_price_money"`
	CatalogObjectID *string `json:"catalog_object_id"`
	CatalogVersion  *int64  `json:"catalog_version"`
	Name            *string `json:"name"`
	TotalPriceMoney *Money  `json:"total_price_money"`
	UID             *string `json:"uid"`
}
