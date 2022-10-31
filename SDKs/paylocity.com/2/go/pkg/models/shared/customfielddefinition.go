package shared

type CustomFieldDefinitionValues struct {
	Code        *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
}

type CustomFieldDefinition struct {
	Category     *string                       `json:"category,omitempty"`
	DefaultValue *string                       `json:"defaultValue,omitempty"`
	IsRequired   *bool                         `json:"isRequired,omitempty"`
	Label        *string                       `json:"label,omitempty"`
	Type         *string                       `json:"type,omitempty"`
	Values       []CustomFieldDefinitionValues `json:"values,omitempty"`
}
