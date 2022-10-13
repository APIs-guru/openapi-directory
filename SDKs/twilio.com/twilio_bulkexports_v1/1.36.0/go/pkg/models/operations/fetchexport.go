package operations

import (
	"openapi/pkg/models/shared"
)

var FetchExportServers = []string{
	"https://bulkexports.twilio.com",
}

type FetchExportPathParams struct {
	ResourceType string `pathParam:"style=simple,explode=false,name=ResourceType"`
}

type FetchExportSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchExportRequest struct {
	ServerURL  *string
	PathParams FetchExportPathParams
	Security   FetchExportSecurity
}

type FetchExportResponse struct {
	ContentType         string
	StatusCode          int64
	BulkexportsV1Export *shared.BulkexportsV1Export
}
