package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteMessageServerList = []string{
	"https://api.twilio.com",
}

type DeleteMessagePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteMessageRequest struct {
	ServerURL  *string
	PathParams DeleteMessagePathParams
	Security   DeleteMessageSecurity
}

type DeleteMessageResponse struct {
	ContentType string
	StatusCode  int64
}
