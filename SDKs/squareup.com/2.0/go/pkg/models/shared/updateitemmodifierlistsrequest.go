package shared

type UpdateItemModifierListsRequest struct {
	ItemIds                []string `json:"item_ids"`
	ModifierListsToDisable []string `json:"modifier_lists_to_disable,omitempty"`
	ModifierListsToEnable  []string `json:"modifier_lists_to_enable,omitempty"`
}
