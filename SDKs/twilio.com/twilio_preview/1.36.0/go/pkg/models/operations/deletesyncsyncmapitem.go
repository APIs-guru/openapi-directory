package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSyncSyncMapItemServers = []string{
	"https://preview.twilio.com",
}

type DeleteSyncSyncMapItemPathParams struct {
	Key        string `pathParam:"style=simple,explode=false,name=Key"`
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type DeleteSyncSyncMapItemHeaders struct {
	IfMatch *string `header:"name=If-Match"`
}

type DeleteSyncSyncMapItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSyncSyncMapItemRequest struct {
	ServerURL  *string
	PathParams DeleteSyncSyncMapItemPathParams
	Headers    DeleteSyncSyncMapItemHeaders
	Security   DeleteSyncSyncMapItemSecurity
}

type DeleteSyncSyncMapItemResponse struct {
	ContentType string
	StatusCode  int64
}
