package shared

type ListCatalogResponse struct {
	Cursor  *string         `json:"cursor"`
	Errors  []Error         `json:"errors"`
	Objects []CatalogObject `json:"objects"`
}
