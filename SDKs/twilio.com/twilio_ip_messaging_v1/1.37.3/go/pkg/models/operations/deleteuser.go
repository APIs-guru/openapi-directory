package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteUserServerList = []string{
	"https://ip-messaging.twilio.com",
}

type DeleteUserPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteUserRequest struct {
	ServerURL  *string
	PathParams DeleteUserPathParams
	Security   DeleteUserSecurity
}

type DeleteUserResponse struct {
	ContentType string
	StatusCode  int64
}
