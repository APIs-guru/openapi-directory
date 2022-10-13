package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSyncListItemServers = []string{
	"https://sync.twilio.com",
}

type FetchSyncListItemPathParams struct {
	Index      int64  `pathParam:"style=simple,explode=false,name=Index"`
	ListSid    string `pathParam:"style=simple,explode=false,name=ListSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type FetchSyncListItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSyncListItemRequest struct {
	ServerURL  *string
	PathParams FetchSyncListItemPathParams
	Security   FetchSyncListItemSecurity
}

type FetchSyncListItemResponse struct {
	ContentType                       string
	StatusCode                        int64
	SyncV1ServiceSyncListSyncListItem *shared.SyncV1ServiceSyncListSyncListItem
}
