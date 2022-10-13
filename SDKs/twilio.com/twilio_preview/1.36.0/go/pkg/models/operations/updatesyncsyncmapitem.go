package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSyncSyncMapItemServers = []string{
	"https://preview.twilio.com",
}

type UpdateSyncSyncMapItemPathParams struct {
	Key        string `pathParam:"style=simple,explode=false,name=Key"`
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type UpdateSyncSyncMapItemHeaders struct {
	IfMatch *string `header:"name=If-Match"`
}

type UpdateSyncSyncMapItemRequestBodyUpdateSyncSyncMapItemRequest struct {
	Data interface{} `form:"name=Data"`
}

type UpdateSyncSyncMapItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSyncSyncMapItemRequest struct {
	ServerURL  *string
	PathParams UpdateSyncSyncMapItemPathParams
	Headers    UpdateSyncSyncMapItemHeaders
	Request    *UpdateSyncSyncMapItemRequestBodyUpdateSyncSyncMapItemRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSyncSyncMapItemSecurity
}

type UpdateSyncSyncMapItemResponse struct {
	ContentType                          string
	StatusCode                           int64
	PreviewSyncServiceSyncMapSyncMapItem *shared.PreviewSyncServiceSyncMapSyncMapItem
}
