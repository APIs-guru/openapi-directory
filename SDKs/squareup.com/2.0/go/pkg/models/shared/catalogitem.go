package shared

type CatalogItem struct {
	Abbreviation            *string                       `json:"abbreviation,omitempty"`
	AvailableElectronically *bool                         `json:"available_electronically,omitempty"`
	AvailableForPickup      *bool                         `json:"available_for_pickup,omitempty"`
	AvailableOnline         *bool                         `json:"available_online,omitempty"`
	CategoryID              *string                       `json:"category_id,omitempty"`
	Description             *string                       `json:"description,omitempty"`
	ItemOptions             []CatalogItemOptionForItem    `json:"item_options,omitempty"`
	LabelColor              *string                       `json:"label_color,omitempty"`
	ModifierListInfo        []CatalogItemModifierListInfo `json:"modifier_list_info,omitempty"`
	Name                    *string                       `json:"name,omitempty"`
	ProductType             *string                       `json:"product_type,omitempty"`
	SkipModifierScreen      *bool                         `json:"skip_modifier_screen,omitempty"`
	SortName                *string                       `json:"sort_name,omitempty"`
	TaxIds                  []string                      `json:"tax_ids,omitempty"`
	Variations              []CatalogObject               `json:"variations,omitempty"`
}
