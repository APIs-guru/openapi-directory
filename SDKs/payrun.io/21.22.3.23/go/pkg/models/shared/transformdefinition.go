package shared



type TransformDefinitionTransformDefinition struct {
    Active *bool `json:"Active,omitempty"`
    ContentType *string `json:"ContentType,omitempty"`
    Definition *string `json:"Definition,omitempty"`
    DefinitionType *string `json:"DefinitionType,omitempty"`
    Readonly *bool `json:"Readonly,omitempty"`
    SupportedReports *string `json:"SupportedReports,omitempty"`
    TaxYear *int32 `json:"TaxYear,omitempty"`
    Title *string `json:"Title,omitempty"`
    Version *string `json:"Version,omitempty"`
    
}

type TransformDefinition struct {
    TransformDefinition *TransformDefinitionTransformDefinition `json:"TransformDefinition,omitempty"`
    
}

