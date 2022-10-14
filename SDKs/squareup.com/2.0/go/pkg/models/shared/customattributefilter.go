package shared

type CustomAttributeFilter struct {
	BoolFilter                  *bool    `json:"bool_filter,omitempty"`
	CustomAttributeDefinitionID *string  `json:"custom_attribute_definition_id,omitempty"`
	Key                         *string  `json:"key,omitempty"`
	NumberFilter                *Range   `json:"number_filter,omitempty"`
	SelectionUidsFilter         []string `json:"selection_uids_filter,omitempty"`
	StringFilter                *string  `json:"string_filter,omitempty"`
}
