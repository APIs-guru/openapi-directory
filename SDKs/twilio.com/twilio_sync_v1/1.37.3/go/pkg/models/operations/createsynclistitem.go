package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSyncListItemServerList = []string{
	"https://sync.twilio.com",
}

type CreateSyncListItemPathParams struct {
	ListSid    string `pathParam:"style=simple,explode=false,name=ListSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateSyncListItemCreateSyncListItemRequest struct {
	CollectionTTL *int64      `form:"name=CollectionTtl"`
	Data          interface{} `form:"name=Data"`
	ItemTTL       *int64      `form:"name=ItemTtl"`
	TTL           *int64      `form:"name=Ttl"`
}

type CreateSyncListItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSyncListItemRequest struct {
	ServerURL  *string
	PathParams CreateSyncListItemPathParams
	Request    *CreateSyncListItemCreateSyncListItemRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSyncListItemSecurity
}

type CreateSyncListItemResponse struct {
	ContentType                       string
	StatusCode                        int64
	SyncV1ServiceSyncListSyncListItem *shared.SyncV1ServiceSyncListSyncListItem
}
