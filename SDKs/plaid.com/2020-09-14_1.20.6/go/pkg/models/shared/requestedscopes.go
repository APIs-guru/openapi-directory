package shared

type RequestedScopes struct {
	AccountFilters              *AccountFilter                  `json:"account_filters"`
	AccountSelectionCardinality AccountSelectionCardinalityEnum `json:"account_selection_cardinality"`
	OptionalProductAccess       map[string]interface{}          `json:"optional_product_access"`
	RequiredProductAccess       map[string]interface{}          `json:"required_product_access"`
}
