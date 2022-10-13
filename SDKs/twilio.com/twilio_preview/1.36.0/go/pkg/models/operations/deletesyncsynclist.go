package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSyncSyncListServers = []string{
	"https://preview.twilio.com",
}

type DeleteSyncSyncListPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSyncSyncListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSyncSyncListRequest struct {
	ServerURL  *string
	PathParams DeleteSyncSyncListPathParams
	Security   DeleteSyncSyncListSecurity
}

type DeleteSyncSyncListResponse struct {
	ContentType string
	StatusCode  int64
}
