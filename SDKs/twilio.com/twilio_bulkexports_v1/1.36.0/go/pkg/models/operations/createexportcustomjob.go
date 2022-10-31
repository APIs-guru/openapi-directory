package operations

import (
	"openapi/pkg/models/shared"
)

var CreateExportCustomJobServers = []string{
	"https://bulkexports.twilio.com",
}

type CreateExportCustomJobPathParams struct {
	ResourceType string `pathParam:"style=simple,explode=false,name=ResourceType"`
}

type CreateExportCustomJobCreateExportCustomJobRequest struct {
	Email         *string `form:"name=Email"`
	EndDay        string  `form:"name=EndDay"`
	FriendlyName  string  `form:"name=FriendlyName"`
	StartDay      string  `form:"name=StartDay"`
	WebhookMethod *string `form:"name=WebhookMethod"`
	WebhookURL    *string `form:"name=WebhookUrl"`
}

type CreateExportCustomJobSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateExportCustomJobRequest struct {
	ServerURL  *string
	PathParams CreateExportCustomJobPathParams
	Request    *CreateExportCustomJobCreateExportCustomJobRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateExportCustomJobSecurity
}

type CreateExportCustomJobResponse struct {
	ContentType                        string
	StatusCode                         int64
	BulkexportsV1ExportExportCustomJob *shared.BulkexportsV1ExportExportCustomJob
}
