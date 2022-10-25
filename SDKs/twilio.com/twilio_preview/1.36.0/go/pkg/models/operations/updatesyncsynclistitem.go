package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSyncSyncListItemServers = []string{
	"https://preview.twilio.com",
}

type UpdateSyncSyncListItemPathParams struct {
	Index      int64  `pathParam:"style=simple,explode=false,name=Index"`
	ListSid    string `pathParam:"style=simple,explode=false,name=ListSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type UpdateSyncSyncListItemHeaders struct {
	IfMatch *string `header:"name=If-Match"`
}

type UpdateSyncSyncListItemUpdateSyncSyncListItemRequest struct {
	Data interface{} `form:"name=Data"`
}

type UpdateSyncSyncListItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSyncSyncListItemRequest struct {
	ServerURL  *string
	PathParams UpdateSyncSyncListItemPathParams
	Headers    UpdateSyncSyncListItemHeaders
	Request    *UpdateSyncSyncListItemUpdateSyncSyncListItemRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSyncSyncListItemSecurity
}

type UpdateSyncSyncListItemResponse struct {
	ContentType                            string
	StatusCode                             int64
	PreviewSyncServiceSyncListSyncListItem *shared.PreviewSyncServiceSyncListSyncListItem
}
