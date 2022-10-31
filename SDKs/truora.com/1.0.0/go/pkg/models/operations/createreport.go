package operations

import (
	"openapi/pkg/models/shared"
)

type CreateReportSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreateReportRequest struct {
	Request  shared.CreateReportInput `request:"mediaType=application/x-www-form-urlencoded"`
	Security CreateReportSecurity
}

type CreateReportResponse struct {
	ContentType  string
	ReportOutput *shared.ReportOutput
	StatusCode   int64
}
