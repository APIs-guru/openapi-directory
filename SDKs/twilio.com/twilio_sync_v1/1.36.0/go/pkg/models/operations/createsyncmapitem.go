package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSyncMapItemServers = []string{
	"https://sync.twilio.com",
}

type CreateSyncMapItemPathParams struct {
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateSyncMapItemCreateSyncMapItemRequest struct {
	CollectionTTL *int64      `form:"name=CollectionTtl"`
	Data          interface{} `form:"name=Data"`
	ItemTTL       *int64      `form:"name=ItemTtl"`
	Key           string      `form:"name=Key"`
	TTL           *int64      `form:"name=Ttl"`
}

type CreateSyncMapItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSyncMapItemRequest struct {
	ServerURL  *string
	PathParams CreateSyncMapItemPathParams
	Request    *CreateSyncMapItemCreateSyncMapItemRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSyncMapItemSecurity
}

type CreateSyncMapItemResponse struct {
	ContentType                     string
	StatusCode                      int64
	SyncV1ServiceSyncMapSyncMapItem *shared.SyncV1ServiceSyncMapSyncMapItem
}
