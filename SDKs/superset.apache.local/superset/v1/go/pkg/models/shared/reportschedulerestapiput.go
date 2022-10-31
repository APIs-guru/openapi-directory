package shared




type ReportScheduleRestAPIPutReportFormatEnum string

const (
    ReportScheduleRestAPIPutReportFormatEnumPng ReportScheduleRestAPIPutReportFormatEnum = "PNG"
ReportScheduleRestAPIPutReportFormatEnumCsv ReportScheduleRestAPIPutReportFormatEnum = "CSV"
ReportScheduleRestAPIPutReportFormatEnumText ReportScheduleRestAPIPutReportFormatEnum = "TEXT"
)



type ReportScheduleRestAPIPutTypeEnum string

const (
    ReportScheduleRestAPIPutTypeEnumAlert ReportScheduleRestAPIPutTypeEnum = "Alert"
ReportScheduleRestAPIPutTypeEnumReport ReportScheduleRestAPIPutTypeEnum = "Report"
)



type ReportScheduleRestAPIPutValidatorTypeEnum string

const (
    ReportScheduleRestAPIPutValidatorTypeEnumNotNull ReportScheduleRestAPIPutValidatorTypeEnum = "not null"
ReportScheduleRestAPIPutValidatorTypeEnumOperator ReportScheduleRestAPIPutValidatorTypeEnum = "operator"
)


type ReportScheduleRestAPIPut struct {
    Active *bool `json:"active,omitempty"`
    Chart *int32 `json:"chart,omitempty"`
    ContextMarkdown *string `json:"context_markdown,omitempty"`
    CreationMethod *interface{} `json:"creation_method,omitempty"`
    Crontab *string `json:"crontab,omitempty"`
    Dashboard *int32 `json:"dashboard,omitempty"`
    Database *int32 `json:"database,omitempty"`
    Description *string `json:"description,omitempty"`
    GracePeriod *int32 `json:"grace_period,omitempty"`
    LogRetention *int32 `json:"log_retention,omitempty"`
    Name *string `json:"name,omitempty"`
    Owners []int32 `json:"owners,omitempty"`
    Recipients []ReportRecipient `json:"recipients,omitempty"`
    ReportFormat *ReportScheduleRestAPIPutReportFormatEnum `json:"report_format,omitempty"`
    SQL *string `json:"sql,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    Type *ReportScheduleRestAPIPutTypeEnum `json:"type,omitempty"`
    ValidatorConfigJSON *ValidatorConfigJSON `json:"validator_config_json,omitempty"`
    ValidatorType *ReportScheduleRestAPIPutValidatorTypeEnum `json:"validator_type,omitempty"`
    WorkingTimeout *int32 `json:"working_timeout,omitempty"`
    
}

