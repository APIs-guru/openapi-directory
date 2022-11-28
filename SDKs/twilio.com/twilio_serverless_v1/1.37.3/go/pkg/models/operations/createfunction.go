package operations

import (
	"openapi/pkg/models/shared"
)

var CreateFunctionServerList = []string{
	"https://serverless.twilio.com",
}

type CreateFunctionPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateFunctionCreateFunctionRequest struct {
	FriendlyName string `form:"name=FriendlyName"`
}

type CreateFunctionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateFunctionRequest struct {
	ServerURL  *string
	PathParams CreateFunctionPathParams
	Request    *CreateFunctionCreateFunctionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateFunctionSecurity
}

type CreateFunctionResponse struct {
	ContentType                 string
	StatusCode                  int64
	ServerlessV1ServiceFunction *shared.ServerlessV1ServiceFunction
}
