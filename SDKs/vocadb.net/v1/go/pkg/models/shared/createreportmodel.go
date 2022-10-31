package shared




type CreateReportModelReportTypeEnum string

const (
    CreateReportModelReportTypeEnumMaliciousIP CreateReportModelReportTypeEnum = "MaliciousIP"
CreateReportModelReportTypeEnumSpamming CreateReportModelReportTypeEnum = "Spamming"
CreateReportModelReportTypeEnumRemovePermissions CreateReportModelReportTypeEnum = "RemovePermissions"
CreateReportModelReportTypeEnumOther CreateReportModelReportTypeEnum = "Other"
)


type CreateReportModel struct {
    Reason *string `json:"reason,omitempty" form:"name=reason"`
    ReportType *CreateReportModelReportTypeEnum `json:"reportType,omitempty" form:"name=reportType"`
    
}

