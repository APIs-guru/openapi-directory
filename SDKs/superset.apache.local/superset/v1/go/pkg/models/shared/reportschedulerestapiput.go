package shared

type ReportScheduleRestAPIPutReportFormatEnum string

const (
	ReportScheduleRestAPIPutReportFormatEnumPng  ReportScheduleRestAPIPutReportFormatEnum = "PNG"
	ReportScheduleRestAPIPutReportFormatEnumCsv  ReportScheduleRestAPIPutReportFormatEnum = "CSV"
	ReportScheduleRestAPIPutReportFormatEnumText ReportScheduleRestAPIPutReportFormatEnum = "TEXT"
)

type ReportScheduleRestAPIPutTypeEnum string

const (
	ReportScheduleRestAPIPutTypeEnumAlert  ReportScheduleRestAPIPutTypeEnum = "Alert"
	ReportScheduleRestAPIPutTypeEnumReport ReportScheduleRestAPIPutTypeEnum = "Report"
)

type ReportScheduleRestAPIPutValidatorTypeEnum string

const (
	ReportScheduleRestAPIPutValidatorTypeEnumNotNull  ReportScheduleRestAPIPutValidatorTypeEnum = "not null"
	ReportScheduleRestAPIPutValidatorTypeEnumOperator ReportScheduleRestAPIPutValidatorTypeEnum = "operator"
)

type ReportScheduleRestAPIPut struct {
	Active              *bool                                      `json:"active"`
	Chart               *int32                                     `json:"chart"`
	ContextMarkdown     *string                                    `json:"context_markdown"`
	CreationMethod      *interface{}                               `json:"creation_method"`
	Crontab             *string                                    `json:"crontab"`
	Dashboard           *int32                                     `json:"dashboard"`
	Database            *int32                                     `json:"database"`
	Description         *string                                    `json:"description"`
	GracePeriod         *int32                                     `json:"grace_period"`
	LogRetention        *int32                                     `json:"log_retention"`
	Name                *string                                    `json:"name"`
	Owners              []int32                                    `json:"owners"`
	Recipients          []ReportRecipient                          `json:"recipients"`
	ReportFormat        *ReportScheduleRestAPIPutReportFormatEnum  `json:"report_format"`
	SQL                 *string                                    `json:"sql"`
	Timezone            *string                                    `json:"timezone"`
	Type                *ReportScheduleRestAPIPutTypeEnum          `json:"type"`
	ValidatorConfigJSON *ValidatorConfigJSON                       `json:"validator_config_json"`
	ValidatorType       *ReportScheduleRestAPIPutValidatorTypeEnum `json:"validator_type"`
	WorkingTimeout      *int32                                     `json:"working_timeout"`
}
