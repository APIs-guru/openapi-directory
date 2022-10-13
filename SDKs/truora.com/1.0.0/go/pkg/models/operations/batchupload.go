package operations

import (
	"openapi/pkg/models/shared"
)

type BatchUploadPathParams struct {
	ReportID string `pathParam:"style=simple,explode=false,name=report_id"`
}

type BatchUploadSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type BatchUploadRequest struct {
	PathParams BatchUploadPathParams
	Request    shared.BatchUploadInput `request:"mediaType=multipart/form-data"`
	Security   BatchUploadSecurity
}

type BatchUploadResponse struct {
	ContentType  string
	Error        *interface{}
	ReportOutput *shared.ReportOutput
	StatusCode   int64
}
