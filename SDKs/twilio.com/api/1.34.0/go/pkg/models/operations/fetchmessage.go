package operations

import (
	"openapi/pkg/models/shared"
)

var FetchMessageServers = []string{
	"https://api.twilio.com",
}

type FetchMessagePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchMessageRequest struct {
	ServerURL  *string
	PathParams FetchMessagePathParams
	Security   FetchMessageSecurity
}

type FetchMessageResponse struct {
	ContentType            string
	StatusCode             int64
	APIV2010AccountMessage *shared.APIV2010AccountMessage
}
