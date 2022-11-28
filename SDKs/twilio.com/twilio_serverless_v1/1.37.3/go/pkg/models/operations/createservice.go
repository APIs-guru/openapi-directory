package operations

import (
	"openapi/pkg/models/shared"
)

var CreateServiceServerList = []string{
	"https://serverless.twilio.com",
}

type CreateServiceCreateServiceRequest struct {
	FriendlyName       string `form:"name=FriendlyName"`
	IncludeCredentials *bool  `form:"name=IncludeCredentials"`
	UIEditable         *bool  `form:"name=UiEditable"`
	UniqueName         string `form:"name=UniqueName"`
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
	ContentType         string
	StatusCode          int64
	ServerlessV1Service *shared.ServerlessV1Service
}
