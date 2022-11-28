package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateExportConfigurationServerList = []string{
	"https://bulkexports.twilio.com",
}

type UpdateExportConfigurationPathParams struct {
	ResourceType string `pathParam:"style=simple,explode=false,name=ResourceType"`
}

type UpdateExportConfigurationUpdateExportConfigurationRequest struct {
	Enabled       *bool   `form:"name=Enabled"`
	WebhookMethod *string `form:"name=WebhookMethod"`
	WebhookURL    *string `form:"name=WebhookUrl"`
}

type UpdateExportConfigurationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateExportConfigurationRequest struct {
	ServerURL  *string
	PathParams UpdateExportConfigurationPathParams
	Request    *UpdateExportConfigurationUpdateExportConfigurationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateExportConfigurationSecurity
}

type UpdateExportConfigurationResponse struct {
	ContentType                      string
	StatusCode                       int64
	BulkexportsV1ExportConfiguration *shared.BulkexportsV1ExportConfiguration
}
