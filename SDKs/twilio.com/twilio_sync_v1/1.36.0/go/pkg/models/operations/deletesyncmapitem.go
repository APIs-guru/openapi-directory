package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSyncMapItemServers = []string{
	"https://sync.twilio.com",
}

type DeleteSyncMapItemPathParams struct {
	Key        string `pathParam:"style=simple,explode=false,name=Key"`
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type DeleteSyncMapItemHeaders struct {
	IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
}

type DeleteSyncMapItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSyncMapItemRequest struct {
	ServerURL  *string
	PathParams DeleteSyncMapItemPathParams
	Headers    DeleteSyncMapItemHeaders
	Security   DeleteSyncMapItemSecurity
}

type DeleteSyncMapItemResponse struct {
	ContentType string
	StatusCode  int64
}
