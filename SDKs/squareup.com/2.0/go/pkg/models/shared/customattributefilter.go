package shared

type CustomAttributeFilter struct {
	BoolFilter                  *bool    `json:"bool_filter"`
	CustomAttributeDefinitionID *string  `json:"custom_attribute_definition_id"`
	Key                         *string  `json:"key"`
	NumberFilter                *Range   `json:"number_filter"`
	SelectionUidsFilter         []string `json:"selection_uids_filter"`
	StringFilter                *string  `json:"string_filter"`
}
