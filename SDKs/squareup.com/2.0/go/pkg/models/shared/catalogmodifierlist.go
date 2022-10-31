package shared

type CatalogModifierList struct {
	Modifiers     []CatalogObject `json:"modifiers,omitempty"`
	Name          *string         `json:"name,omitempty"`
	Ordinal       *int64          `json:"ordinal,omitempty"`
	SelectionType *string         `json:"selection_type,omitempty"`
}
