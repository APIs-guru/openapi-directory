package shared




type ReportScheduleRestAPIPostReportFormatEnum string

const (
    ReportScheduleRestAPIPostReportFormatEnumPng ReportScheduleRestAPIPostReportFormatEnum = "PNG"
ReportScheduleRestAPIPostReportFormatEnumCsv ReportScheduleRestAPIPostReportFormatEnum = "CSV"
ReportScheduleRestAPIPostReportFormatEnumText ReportScheduleRestAPIPostReportFormatEnum = "TEXT"
)



type ReportScheduleRestAPIPostTypeEnum string

const (
    ReportScheduleRestAPIPostTypeEnumAlert ReportScheduleRestAPIPostTypeEnum = "Alert"
ReportScheduleRestAPIPostTypeEnumReport ReportScheduleRestAPIPostTypeEnum = "Report"
)



type ReportScheduleRestAPIPostValidatorTypeEnum string

const (
    ReportScheduleRestAPIPostValidatorTypeEnumNotNull ReportScheduleRestAPIPostValidatorTypeEnum = "not null"
ReportScheduleRestAPIPostValidatorTypeEnumOperator ReportScheduleRestAPIPostValidatorTypeEnum = "operator"
)


type ReportScheduleRestAPIPost struct {
    Active *bool `json:"active,omitempty"`
    Chart *int32 `json:"chart,omitempty"`
    ContextMarkdown *string `json:"context_markdown,omitempty"`
    CreationMethod *interface{} `json:"creation_method,omitempty"`
    Crontab string `json:"crontab"`
    Dashboard *int32 `json:"dashboard,omitempty"`
    Database *int32 `json:"database,omitempty"`
    Description *string `json:"description,omitempty"`
    GracePeriod *int32 `json:"grace_period,omitempty"`
    LogRetention *int32 `json:"log_retention,omitempty"`
    Name string `json:"name"`
    Owners []int32 `json:"owners,omitempty"`
    Recipients []ReportRecipient `json:"recipients,omitempty"`
    ReportFormat *ReportScheduleRestAPIPostReportFormatEnum `json:"report_format,omitempty"`
    SQL *string `json:"sql,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    Type ReportScheduleRestAPIPostTypeEnum `json:"type"`
    ValidatorConfigJSON *ValidatorConfigJSON `json:"validator_config_json,omitempty"`
    ValidatorType *ReportScheduleRestAPIPostValidatorTypeEnum `json:"validator_type,omitempty"`
    WorkingTimeout *int32 `json:"working_timeout,omitempty"`
    
}

