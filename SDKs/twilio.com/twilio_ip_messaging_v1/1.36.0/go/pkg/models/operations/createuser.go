package operations

import (
	"openapi/pkg/models/shared"
)

var CreateUserServers = []string{
	"https://ip-messaging.twilio.com",
}

type CreateUserPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateUserRequestBodyCreateUserRequest struct {
	Attributes   *string `form:"name=Attributes"`
	FriendlyName *string `form:"name=FriendlyName"`
	Identity     string  `form:"name=Identity"`
	RoleSid      *string `form:"name=RoleSid"`
}

type CreateUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateUserRequest struct {
	ServerURL  *string
	PathParams CreateUserPathParams
	Request    *CreateUserRequestBodyCreateUserRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateUserSecurity
}

type CreateUserResponse struct {
	ContentType              string
	StatusCode               int64
	IPMessagingV1ServiceUser *shared.IPMessagingV1ServiceUser
}
