package shared

type ReportDefinitionReportDefinitionReportQueryGroupsGroup struct {
	Group []interface{} `json:"Group"`
}

type ReportDefinitionReportDefinitionReportQueryVariablesVariable struct {
	Variable []interface{} `json:"Variable"`
}

type ReportDefinitionReportDefinitionReportQueryReportQuery struct {
	ExcludeNullOrEmptyElements *bool                                                         `json:"ExcludeNullOrEmptyElements"`
	Groups                     *ReportDefinitionReportDefinitionReportQueryGroupsGroup       `json:"Groups"`
	RootNodeName               *string                                                       `json:"RootNodeName"`
	SuppressMetricAttributes   *bool                                                         `json:"SuppressMetricAttributes"`
	Variables                  *ReportDefinitionReportDefinitionReportQueryVariablesVariable `json:"Variables"`
}

type ReportDefinitionReportDefinitionReportDefinition struct {
	Active              *bool                                                   `json:"Active"`
	Readonly            *bool                                                   `json:"Readonly"`
	ReportQuery         *ReportDefinitionReportDefinitionReportQueryReportQuery `json:"ReportQuery"`
	SupportedTransforms *string                                                 `json:"SupportedTransforms"`
	Title               *string                                                 `json:"Title"`
	Version             *string                                                 `json:"Version"`
}

type ReportDefinition struct {
	ReportDefinition *ReportDefinitionReportDefinitionReportDefinition `json:"ReportDefinition"`
}
