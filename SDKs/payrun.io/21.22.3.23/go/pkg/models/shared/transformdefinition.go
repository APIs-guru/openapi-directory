package shared

type TransformDefinitionTransformDefinitionTransformDefinition struct {
	Active           *bool   `json:"Active"`
	ContentType      *string `json:"ContentType"`
	Definition       *string `json:"Definition"`
	DefinitionType   *string `json:"DefinitionType"`
	Readonly         *bool   `json:"Readonly"`
	SupportedReports *string `json:"SupportedReports"`
	TaxYear          *int32  `json:"TaxYear"`
	Title            *string `json:"Title"`
	Version          *string `json:"Version"`
}

type TransformDefinition struct {
	TransformDefinition *TransformDefinitionTransformDefinitionTransformDefinition `json:"TransformDefinition"`
}
