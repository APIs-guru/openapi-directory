package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateServiceServerList = []string{
	"https://serverless.twilio.com",
}

type UpdateServicePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateServiceUpdateServiceRequest struct {
	FriendlyName       *string `form:"name=FriendlyName"`
	IncludeCredentials *bool   `form:"name=IncludeCredentials"`
	UIEditable         *bool   `form:"name=UiEditable"`
}

type UpdateServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceRequest struct {
	ServerURL  *string
	PathParams UpdateServicePathParams
	Request    *UpdateServiceUpdateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceSecurity
}

type UpdateServiceResponse struct {
	ContentType         string
	StatusCode          int64
	ServerlessV1Service *shared.ServerlessV1Service
}
