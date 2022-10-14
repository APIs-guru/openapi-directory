package shared

type ReportDefinitionReportDefinitionReportQueryGroupsGroup struct {
	Group []interface{} `json:"Group,omitempty"`
}

type ReportDefinitionReportDefinitionReportQueryVariablesVariable struct {
	Variable []interface{} `json:"Variable,omitempty"`
}

type ReportDefinitionReportDefinitionReportQueryReportQuery struct {
	ExcludeNullOrEmptyElements *bool                                                         `json:"ExcludeNullOrEmptyElements,omitempty"`
	Groups                     *ReportDefinitionReportDefinitionReportQueryGroupsGroup       `json:"Groups,omitempty"`
	RootNodeName               *string                                                       `json:"RootNodeName,omitempty"`
	SuppressMetricAttributes   *bool                                                         `json:"SuppressMetricAttributes,omitempty"`
	Variables                  *ReportDefinitionReportDefinitionReportQueryVariablesVariable `json:"Variables,omitempty"`
}

type ReportDefinitionReportDefinitionReportDefinition struct {
	Active              *bool                                                   `json:"Active,omitempty"`
	Readonly            *bool                                                   `json:"Readonly,omitempty"`
	ReportQuery         *ReportDefinitionReportDefinitionReportQueryReportQuery `json:"ReportQuery,omitempty"`
	SupportedTransforms *string                                                 `json:"SupportedTransforms,omitempty"`
	Title               *string                                                 `json:"Title,omitempty"`
	Version             *string                                                 `json:"Version,omitempty"`
}

type ReportDefinition struct {
	ReportDefinition *ReportDefinitionReportDefinitionReportDefinition `json:"ReportDefinition,omitempty"`
}
