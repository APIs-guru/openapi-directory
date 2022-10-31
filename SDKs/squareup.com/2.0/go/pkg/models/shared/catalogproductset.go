package shared

type CatalogProductSet struct {
	AllProducts   *bool    `json:"all_products,omitempty"`
	Name          *string  `json:"name,omitempty"`
	ProductIdsAll []string `json:"product_ids_all,omitempty"`
	ProductIdsAny []string `json:"product_ids_any,omitempty"`
	QuantityExact *int64   `json:"quantity_exact,omitempty"`
	QuantityMax   *int64   `json:"quantity_max,omitempty"`
	QuantityMin   *int64   `json:"quantity_min,omitempty"`
}
