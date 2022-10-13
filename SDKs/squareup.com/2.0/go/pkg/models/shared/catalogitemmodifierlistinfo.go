package shared

type CatalogItemModifierListInfo struct {
	Enabled              *bool                     `json:"enabled"`
	MaxSelectedModifiers *int64                    `json:"max_selected_modifiers"`
	MinSelectedModifiers *int64                    `json:"min_selected_modifiers"`
	ModifierListID       string                    `json:"modifier_list_id"`
	ModifierOverrides    []CatalogModifierOverride `json:"modifier_overrides"`
}
