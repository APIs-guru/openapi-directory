package operations

import (
	"openapi/pkg/models/shared"
)

var FetchDayServerList = []string{
	"https://bulkexports.twilio.com",
}

type FetchDayPathParams struct {
	Day          string `pathParam:"style=simple,explode=false,name=Day"`
	ResourceType string `pathParam:"style=simple,explode=false,name=ResourceType"`
}

type FetchDaySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchDayRequest struct {
	ServerURL  *string
	PathParams FetchDayPathParams
	Security   FetchDaySecurity
}

type FetchDayResponse struct {
	ContentType                    string
	StatusCode                     int64
	BulkexportsV1ExportDayInstance *shared.BulkexportsV1ExportDayInstance
}
