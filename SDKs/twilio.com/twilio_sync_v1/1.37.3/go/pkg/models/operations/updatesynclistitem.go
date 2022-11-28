package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSyncListItemServerList = []string{
	"https://sync.twilio.com",
}

type UpdateSyncListItemPathParams struct {
	Index      int64  `pathParam:"style=simple,explode=false,name=Index"`
	ListSid    string `pathParam:"style=simple,explode=false,name=ListSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type UpdateSyncListItemHeaders struct {
	IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
}

type UpdateSyncListItemUpdateSyncListItemRequest struct {
	CollectionTTL *int64       `form:"name=CollectionTtl"`
	Data          *interface{} `form:"name=Data"`
	ItemTTL       *int64       `form:"name=ItemTtl"`
	TTL           *int64       `form:"name=Ttl"`
}

type UpdateSyncListItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSyncListItemRequest struct {
	ServerURL  *string
	PathParams UpdateSyncListItemPathParams
	Headers    UpdateSyncListItemHeaders
	Request    *UpdateSyncListItemUpdateSyncListItemRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSyncListItemSecurity
}

type UpdateSyncListItemResponse struct {
	ContentType                       string
	StatusCode                        int64
	SyncV1ServiceSyncListSyncListItem *shared.SyncV1ServiceSyncListSyncListItem
}
