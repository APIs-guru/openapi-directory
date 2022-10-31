package shared

type ListCatalogResponse struct {
	Cursor  *string         `json:"cursor,omitempty"`
	Errors  []Error         `json:"errors,omitempty"`
	Objects []CatalogObject `json:"objects,omitempty"`
}
