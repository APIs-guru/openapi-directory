package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSyncSyncListItemServers = []string{
	"https://preview.twilio.com",
}

type DeleteSyncSyncListItemPathParams struct {
	Index      int64  `pathParam:"style=simple,explode=false,name=Index"`
	ListSid    string `pathParam:"style=simple,explode=false,name=ListSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type DeleteSyncSyncListItemHeaders struct {
	IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
}

type DeleteSyncSyncListItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSyncSyncListItemRequest struct {
	ServerURL  *string
	PathParams DeleteSyncSyncListItemPathParams
	Headers    DeleteSyncSyncListItemHeaders
	Security   DeleteSyncSyncListItemSecurity
}

type DeleteSyncSyncListItemResponse struct {
	ContentType string
	StatusCode  int64
}
