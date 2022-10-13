package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSyncSyncMapItemServers = []string{
	"https://preview.twilio.com",
}

type CreateSyncSyncMapItemPathParams struct {
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateSyncSyncMapItemRequestBodyCreateSyncSyncMapItemRequest struct {
	Data interface{} `form:"name=Data"`
	Key  string      `form:"name=Key"`
}

type CreateSyncSyncMapItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSyncSyncMapItemRequest struct {
	ServerURL  *string
	PathParams CreateSyncSyncMapItemPathParams
	Request    *CreateSyncSyncMapItemRequestBodyCreateSyncSyncMapItemRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSyncSyncMapItemSecurity
}

type CreateSyncSyncMapItemResponse struct {
	ContentType                          string
	StatusCode                           int64
	PreviewSyncServiceSyncMapSyncMapItem *shared.PreviewSyncServiceSyncMapSyncMapItem
}
