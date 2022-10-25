package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSyncMapItemServers = []string{
	"https://sync.twilio.com",
}

type UpdateSyncMapItemPathParams struct {
	Key        string `pathParam:"style=simple,explode=false,name=Key"`
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type UpdateSyncMapItemHeaders struct {
	IfMatch *string `header:"name=If-Match"`
}

type UpdateSyncMapItemUpdateSyncMapItemRequest struct {
	CollectionTTL *int64       `form:"name=CollectionTtl"`
	Data          *interface{} `form:"name=Data"`
	ItemTTL       *int64       `form:"name=ItemTtl"`
	TTL           *int64       `form:"name=Ttl"`
}

type UpdateSyncMapItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSyncMapItemRequest struct {
	ServerURL  *string
	PathParams UpdateSyncMapItemPathParams
	Headers    UpdateSyncMapItemHeaders
	Request    *UpdateSyncMapItemUpdateSyncMapItemRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSyncMapItemSecurity
}

type UpdateSyncMapItemResponse struct {
	ContentType                     string
	StatusCode                      int64
	SyncV1ServiceSyncMapSyncMapItem *shared.SyncV1ServiceSyncMapSyncMapItem
}
