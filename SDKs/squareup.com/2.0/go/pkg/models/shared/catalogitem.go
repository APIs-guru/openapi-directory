package shared

type CatalogItem struct {
	Abbreviation            *string                       `json:"abbreviation"`
	AvailableElectronically *bool                         `json:"available_electronically"`
	AvailableForPickup      *bool                         `json:"available_for_pickup"`
	AvailableOnline         *bool                         `json:"available_online"`
	CategoryID              *string                       `json:"category_id"`
	Description             *string                       `json:"description"`
	ItemOptions             []CatalogItemOptionForItem    `json:"item_options"`
	LabelColor              *string                       `json:"label_color"`
	ModifierListInfo        []CatalogItemModifierListInfo `json:"modifier_list_info"`
	Name                    *string                       `json:"name"`
	ProductType             *string                       `json:"product_type"`
	SkipModifierScreen      *bool                         `json:"skip_modifier_screen"`
	SortName                *string                       `json:"sort_name"`
	TaxIds                  []string                      `json:"tax_ids"`
	Variations              []CatalogObject               `json:"variations"`
}
