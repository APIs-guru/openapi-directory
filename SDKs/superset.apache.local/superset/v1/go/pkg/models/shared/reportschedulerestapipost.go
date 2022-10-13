package shared

type ReportScheduleRestAPIPostReportFormatEnum string

const (
	ReportScheduleRestAPIPostReportFormatEnumPng  ReportScheduleRestAPIPostReportFormatEnum = "PNG"
	ReportScheduleRestAPIPostReportFormatEnumCsv  ReportScheduleRestAPIPostReportFormatEnum = "CSV"
	ReportScheduleRestAPIPostReportFormatEnumText ReportScheduleRestAPIPostReportFormatEnum = "TEXT"
)

type ReportScheduleRestAPIPostTypeEnum string

const (
	ReportScheduleRestAPIPostTypeEnumAlert  ReportScheduleRestAPIPostTypeEnum = "Alert"
	ReportScheduleRestAPIPostTypeEnumReport ReportScheduleRestAPIPostTypeEnum = "Report"
)

type ReportScheduleRestAPIPostValidatorTypeEnum string

const (
	ReportScheduleRestAPIPostValidatorTypeEnumNotNull  ReportScheduleRestAPIPostValidatorTypeEnum = "not null"
	ReportScheduleRestAPIPostValidatorTypeEnumOperator ReportScheduleRestAPIPostValidatorTypeEnum = "operator"
)

type ReportScheduleRestAPIPost struct {
	Active              *bool                                       `json:"active"`
	Chart               *int32                                      `json:"chart"`
	ContextMarkdown     *string                                     `json:"context_markdown"`
	CreationMethod      *interface{}                                `json:"creation_method"`
	Crontab             string                                      `json:"crontab"`
	Dashboard           *int32                                      `json:"dashboard"`
	Database            *int32                                      `json:"database"`
	Description         *string                                     `json:"description"`
	GracePeriod         *int32                                      `json:"grace_period"`
	LogRetention        *int32                                      `json:"log_retention"`
	Name                string                                      `json:"name"`
	Owners              []int32                                     `json:"owners"`
	Recipients          []ReportRecipient                           `json:"recipients"`
	ReportFormat        *ReportScheduleRestAPIPostReportFormatEnum  `json:"report_format"`
	SQL                 *string                                     `json:"sql"`
	Timezone            *string                                     `json:"timezone"`
	Type                ReportScheduleRestAPIPostTypeEnum           `json:"type"`
	ValidatorConfigJSON *ValidatorConfigJSON                        `json:"validator_config_json"`
	ValidatorType       *ReportScheduleRestAPIPostValidatorTypeEnum `json:"validator_type"`
	WorkingTimeout      *int32                                      `json:"working_timeout"`
}
