package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSyncSyncListItemServers = []string{
	"https://preview.twilio.com",
}

type FetchSyncSyncListItemPathParams struct {
	Index      int64  `pathParam:"style=simple,explode=false,name=Index"`
	ListSid    string `pathParam:"style=simple,explode=false,name=ListSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type FetchSyncSyncListItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSyncSyncListItemRequest struct {
	ServerURL  *string
	PathParams FetchSyncSyncListItemPathParams
	Security   FetchSyncSyncListItemSecurity
}

type FetchSyncSyncListItemResponse struct {
	ContentType                            string
	StatusCode                             int64
	PreviewSyncServiceSyncListSyncListItem *shared.PreviewSyncServiceSyncListSyncListItem
}
