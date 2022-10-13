package shared

type CatalogItemOptionValue struct {
	Color        *string `json:"color"`
	Description  *string `json:"description"`
	ItemOptionID *string `json:"item_option_id"`
	Name         *string `json:"name"`
	Ordinal      *int64  `json:"ordinal"`
}
