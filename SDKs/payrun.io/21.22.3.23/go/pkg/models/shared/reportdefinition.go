package shared

// ReportDefinitionReportDefinitionReportQueryGroup
// The querys' groups
type ReportDefinitionReportDefinitionReportQueryGroup struct {
	Group []interface{} `json:"Group,omitempty"`
}

// ReportDefinitionReportDefinitionReportQueryVariable
// The querys' variables
type ReportDefinitionReportDefinitionReportQueryVariable struct {
	Variable []interface{} `json:"Variable,omitempty"`
}

// ReportDefinitionReportDefinitionReportQuery
// The report definitions' report query
type ReportDefinitionReportDefinitionReportQuery struct {
	ExcludeNullOrEmptyElements *bool                                                `json:"ExcludeNullOrEmptyElements,omitempty"`
	Groups                     *ReportDefinitionReportDefinitionReportQueryGroup    `json:"Groups,omitempty"`
	RootNodeName               *string                                              `json:"RootNodeName,omitempty"`
	SuppressMetricAttributes   *bool                                                `json:"SuppressMetricAttributes,omitempty"`
	Variables                  *ReportDefinitionReportDefinitionReportQueryVariable `json:"Variables,omitempty"`
}

type ReportDefinitionReportDefinition struct {
	Active              *bool                                        `json:"Active,omitempty"`
	Readonly            *bool                                        `json:"Readonly,omitempty"`
	ReportQuery         *ReportDefinitionReportDefinitionReportQuery `json:"ReportQuery,omitempty"`
	SupportedTransforms *string                                      `json:"SupportedTransforms,omitempty"`
	Title               *string                                      `json:"Title,omitempty"`
	Version             *string                                      `json:"Version,omitempty"`
}

type ReportDefinition struct {
	ReportDefinition *ReportDefinitionReportDefinition `json:"ReportDefinition,omitempty"`
}
