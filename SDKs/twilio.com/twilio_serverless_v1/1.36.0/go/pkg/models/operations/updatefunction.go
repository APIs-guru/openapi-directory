package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateFunctionServers = []string{
	"https://serverless.twilio.com",
}

type UpdateFunctionPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateFunctionUpdateFunctionRequest struct {
	FriendlyName string `form:"name=FriendlyName"`
}

type UpdateFunctionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateFunctionRequest struct {
	ServerURL  *string
	PathParams UpdateFunctionPathParams
	Request    *UpdateFunctionUpdateFunctionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateFunctionSecurity
}

type UpdateFunctionResponse struct {
	ContentType                 string
	StatusCode                  int64
	ServerlessV1ServiceFunction *shared.ServerlessV1ServiceFunction
}
