package shared

type CreateReportModelReportTypeEnum string

const (
	CreateReportModelReportTypeEnumMaliciousIP       CreateReportModelReportTypeEnum = "MaliciousIP"
	CreateReportModelReportTypeEnumSpamming          CreateReportModelReportTypeEnum = "Spamming"
	CreateReportModelReportTypeEnumRemovePermissions CreateReportModelReportTypeEnum = "RemovePermissions"
	CreateReportModelReportTypeEnumOther             CreateReportModelReportTypeEnum = "Other"
)

type CreateReportModel struct {
	Reason     *string                          `json:"reason" form:"name=reason"`
	ReportType *CreateReportModelReportTypeEnum `json:"reportType" form:"name=reportType"`
}
