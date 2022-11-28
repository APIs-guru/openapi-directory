package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteEnvironmentServerList = []string{
	"https://serverless.twilio.com",
}

type DeleteEnvironmentPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteEnvironmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteEnvironmentRequest struct {
	ServerURL  *string
	PathParams DeleteEnvironmentPathParams
	Security   DeleteEnvironmentSecurity
}

type DeleteEnvironmentResponse struct {
	ContentType string
	StatusCode  int64
}
