package shared

type CatalogModifier struct {
	ModifierListID *string `json:"modifier_list_id"`
	Name           *string `json:"name"`
	Ordinal        *int64  `json:"ordinal"`
	PriceMoney     *Money  `json:"price_money"`
}
