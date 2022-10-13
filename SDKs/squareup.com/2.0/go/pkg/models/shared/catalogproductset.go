package shared

type CatalogProductSet struct {
	AllProducts   *bool    `json:"all_products"`
	Name          *string  `json:"name"`
	ProductIdsAll []string `json:"product_ids_all"`
	ProductIdsAny []string `json:"product_ids_any"`
	QuantityExact *int64   `json:"quantity_exact"`
	QuantityMax   *int64   `json:"quantity_max"`
	QuantityMin   *int64   `json:"quantity_min"`
}
