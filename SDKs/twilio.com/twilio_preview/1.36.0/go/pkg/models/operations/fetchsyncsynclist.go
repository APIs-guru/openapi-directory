package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSyncSyncListServers = []string{
	"https://preview.twilio.com",
}

type FetchSyncSyncListPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSyncSyncListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSyncSyncListRequest struct {
	ServerURL  *string
	PathParams FetchSyncSyncListPathParams
	Security   FetchSyncSyncListSecurity
}

type FetchSyncSyncListResponse struct {
	ContentType                string
	StatusCode                 int64
	PreviewSyncServiceSyncList *shared.PreviewSyncServiceSyncList
}
