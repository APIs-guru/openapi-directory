package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSyncListServerList = []string{
	"https://sync.twilio.com",
}

type DeleteSyncListPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSyncListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSyncListRequest struct {
	ServerURL  *string
	PathParams DeleteSyncListPathParams
	Security   DeleteSyncListSecurity
}

type DeleteSyncListResponse struct {
	ContentType string
	StatusCode  int64
}
