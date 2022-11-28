package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteServiceBindingServerList = []string{
	"https://conversations.twilio.com",
}

type DeleteServiceBindingPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteServiceBindingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteServiceBindingRequest struct {
	ServerURL  *string
	PathParams DeleteServiceBindingPathParams
	Security   DeleteServiceBindingSecurity
}

type DeleteServiceBindingResponse struct {
	ContentType string
	StatusCode  int64
}
