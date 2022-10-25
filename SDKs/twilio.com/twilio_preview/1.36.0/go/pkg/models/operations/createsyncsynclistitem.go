package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSyncSyncListItemServers = []string{
	"https://preview.twilio.com",
}

type CreateSyncSyncListItemPathParams struct {
	ListSid    string `pathParam:"style=simple,explode=false,name=ListSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateSyncSyncListItemCreateSyncSyncListItemRequest struct {
	Data interface{} `form:"name=Data"`
}

type CreateSyncSyncListItemSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSyncSyncListItemRequest struct {
	ServerURL  *string
	PathParams CreateSyncSyncListItemPathParams
	Request    *CreateSyncSyncListItemCreateSyncSyncListItemRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSyncSyncListItemSecurity
}

type CreateSyncSyncListItemResponse struct {
	ContentType                            string
	StatusCode                             int64
	PreviewSyncServiceSyncListSyncListItem *shared.PreviewSyncServiceSyncListSyncListItem
}
