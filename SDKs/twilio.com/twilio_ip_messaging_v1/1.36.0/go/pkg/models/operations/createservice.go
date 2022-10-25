package operations

import (
	"openapi/pkg/models/shared"
)

var CreateServiceServers = []string{
	"https://ip-messaging.twilio.com",
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
	ContentType          string
	StatusCode           int64
	IPMessagingV1Service *shared.IPMessagingV1Service
}
