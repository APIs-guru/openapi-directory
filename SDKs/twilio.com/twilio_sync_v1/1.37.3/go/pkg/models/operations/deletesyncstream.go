package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSyncStreamServerList = []string{
	"https://sync.twilio.com",
}

type DeleteSyncStreamPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSyncStreamSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSyncStreamRequest struct {
	ServerURL  *string
	PathParams DeleteSyncStreamPathParams
	Security   DeleteSyncStreamSecurity
}

type DeleteSyncStreamResponse struct {
	ContentType string
	StatusCode  int64
}
