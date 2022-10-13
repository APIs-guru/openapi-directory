package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSyncSyncListServers = []string{
	"https://preview.twilio.com",
}

type CreateSyncSyncListPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateSyncSyncListRequestBodyCreateSyncSyncListRequest struct {
	UniqueName *string `form:"name=UniqueName"`
}

type CreateSyncSyncListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSyncSyncListRequest struct {
	ServerURL  *string
	PathParams CreateSyncSyncListPathParams
	Request    *CreateSyncSyncListRequestBodyCreateSyncSyncListRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSyncSyncListSecurity
}

type CreateSyncSyncListResponse struct {
	ContentType                string
	StatusCode                 int64
	PreviewSyncServiceSyncList *shared.PreviewSyncServiceSyncList
}
