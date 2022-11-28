package operations

import (
	"openapi/pkg/models/shared"
)

var CreateServiceServerList = []string{
	"https://chat.twilio.com",
}

type CreateServiceCreateServiceRequest struct {
	FriendlyName string `form:"name=FriendlyName"`
}

type CreateServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateServiceRequest struct {
	ServerURL *string
	Request   *CreateServiceCreateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateServiceSecurity
}

type CreateServiceResponse struct {
	ContentType   string
	StatusCode    int64
	ChatV1Service *shared.ChatV1Service
}
