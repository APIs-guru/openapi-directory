package operations

import (
	"openapi/pkg/models/shared"
)

var FetchFunctionServerList = []string{
	"https://serverless.twilio.com",
}

type FetchFunctionPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchFunctionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchFunctionRequest struct {
	ServerURL  *string
	PathParams FetchFunctionPathParams
	Security   FetchFunctionSecurity
}

type FetchFunctionResponse struct {
	ContentType                 string
	StatusCode                  int64
	ServerlessV1ServiceFunction *shared.ServerlessV1ServiceFunction
}
