package shared

type CatalogCustomAttributeValue struct {
	BooleanValue                *bool    `json:"boolean_value"`
	CustomAttributeDefinitionID *string  `json:"custom_attribute_definition_id"`
	Key                         *string  `json:"key"`
	Name                        *string  `json:"name"`
	NumberValue                 *string  `json:"number_value"`
	SelectionUIDValues          []string `json:"selection_uid_values"`
	StringValue                 *string  `json:"string_value"`
	Type                        *string  `json:"type"`
}
