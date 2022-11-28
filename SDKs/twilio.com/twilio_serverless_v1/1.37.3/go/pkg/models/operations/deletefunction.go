package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteFunctionServerList = []string{
	"https://serverless.twilio.com",
}

type DeleteFunctionPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteFunctionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteFunctionRequest struct {
	ServerURL  *string
	PathParams DeleteFunctionPathParams
	Security   DeleteFunctionSecurity
}

type DeleteFunctionResponse struct {
	ContentType string
	StatusCode  int64
}
