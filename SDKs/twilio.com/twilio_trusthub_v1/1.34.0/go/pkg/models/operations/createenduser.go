package operations

import (
	"openapi/pkg/models/shared"
)

var CreateEndUserServers = []string{
	"https://trusthub.twilio.com",
}

type CreateEndUserRequestBodyCreateEndUserRequest struct {
	Attributes   *interface{} `form:"name=Attributes"`
	FriendlyName string       `form:"name=FriendlyName"`
	Type         string       `form:"name=Type"`
}

type CreateEndUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateEndUserRequest struct {
	ServerURL *string
	Request   *CreateEndUserRequestBodyCreateEndUserRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateEndUserSecurity
}

type CreateEndUserResponse struct {
	ContentType       string
	StatusCode        int64
	TrusthubV1EndUser *shared.TrusthubV1EndUser
}
