package shared

type CustomFieldDefinitionValues struct {
	Code        *string `json:"code"`
	Description *string `json:"description"`
}

type CustomFieldDefinition struct {
	Category     *string                       `json:"category"`
	DefaultValue *string                       `json:"defaultValue"`
	IsRequired   *bool                         `json:"isRequired"`
	Label        *string                       `json:"label"`
	Type         *string                       `json:"type"`
	Values       []CustomFieldDefinitionValues `json:"values"`
}
