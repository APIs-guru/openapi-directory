package shared

type CatalogModifierList struct {
	Modifiers     []CatalogObject `json:"modifiers"`
	Name          *string         `json:"name"`
	Ordinal       *int64          `json:"ordinal"`
	SelectionType *string         `json:"selection_type"`
}
