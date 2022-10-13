package operations

import (
	"openapi/pkg/models/shared"
)

var FetchServiceBindingServers = []string{
	"https://conversations.twilio.com",
}

type FetchServiceBindingPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchServiceBindingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchServiceBindingRequest struct {
	ServerURL  *string
	PathParams FetchServiceBindingPathParams
	Security   FetchServiceBindingSecurity
}

type FetchServiceBindingResponse struct {
	ContentType                          string
	StatusCode                           int64
	ConversationsV1ServiceServiceBinding *shared.ConversationsV1ServiceServiceBinding
}
