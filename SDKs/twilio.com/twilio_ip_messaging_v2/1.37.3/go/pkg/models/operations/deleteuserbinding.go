package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteUserBindingServerList = []string{
	"https://ip-messaging.twilio.com",
}

type DeleteUserBindingPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
	UserSid    string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type DeleteUserBindingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteUserBindingRequest struct {
	ServerURL  *string
	PathParams DeleteUserBindingPathParams
	Security   DeleteUserBindingSecurity
}

type DeleteUserBindingResponse struct {
	ContentType string
	StatusCode  int64
}
