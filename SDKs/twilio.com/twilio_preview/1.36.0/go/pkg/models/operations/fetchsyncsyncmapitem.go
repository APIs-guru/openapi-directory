package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSyncSyncMapItemServers = []string{
	"https://preview.twilio.com",
}

type FetchSyncSyncMapItemPathParams struct {
	Key        string `pathParam:"style=simple,explode=false,name=Key"`
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type FetchSyncSyncMapItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSyncSyncMapItemRequest struct {
	ServerURL  *string
	PathParams FetchSyncSyncMapItemPathParams
	Security   FetchSyncSyncMapItemSecurity
}

type FetchSyncSyncMapItemResponse struct {
	ContentType                          string
	StatusCode                           int64
	PreviewSyncServiceSyncMapSyncMapItem *shared.PreviewSyncServiceSyncMapSyncMapItem
}
