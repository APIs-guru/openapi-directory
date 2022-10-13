package operations

import (
	"openapi/pkg/models/shared"
)

var FetchFunctionVersionContentServers = []string{
	"https://serverless.twilio.com",
}

type FetchFunctionVersionContentPathParams struct {
	FunctionSid string `pathParam:"style=simple,explode=false,name=FunctionSid"`
	ServiceSid  string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid         string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchFunctionVersionContentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchFunctionVersionContentRequest struct {
	ServerURL  *string
	PathParams FetchFunctionVersionContentPathParams
	Security   FetchFunctionVersionContentSecurity
}

type FetchFunctionVersionContentResponse struct {
	ContentType                                                      string
	StatusCode                                                       int64
	ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent *shared.ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent
}
