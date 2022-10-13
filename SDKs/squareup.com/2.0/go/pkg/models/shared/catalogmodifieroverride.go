package shared

type CatalogModifierOverride struct {
	ModifierID  string `json:"modifier_id"`
	OnByDefault *bool  `json:"on_by_default"`
}
