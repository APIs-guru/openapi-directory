package shared

type CatalogItemOption struct {
	Description *string         `json:"description"`
	DisplayName *string         `json:"display_name"`
	Name        *string         `json:"name"`
	ShowColors  *bool           `json:"show_colors"`
	Values      []CatalogObject `json:"values"`
}
