package shared



type CatalogCustomAttributeValue struct {
    BooleanValue *bool `json:"boolean_value,omitempty"`
    CustomAttributeDefinitionID *string `json:"custom_attribute_definition_id,omitempty"`
    Key *string `json:"key,omitempty"`
    Name *string `json:"name,omitempty"`
    NumberValue *string `json:"number_value,omitempty"`
    SelectionUIDValues []string `json:"selection_uid_values,omitempty"`
    StringValue *string `json:"string_value,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

