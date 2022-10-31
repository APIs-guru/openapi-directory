package operations

import (
	"openapi/pkg/models/shared"
)

var FetchEnvironmentServers = []string{
	"https://serverless.twilio.com",
}

type FetchEnvironmentPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchEnvironmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchEnvironmentRequest struct {
	ServerURL  *string
	PathParams FetchEnvironmentPathParams
	Security   FetchEnvironmentSecurity
}

type FetchEnvironmentResponse struct {
	ContentType                    string
	StatusCode                     int64
	ServerlessV1ServiceEnvironment *shared.ServerlessV1ServiceEnvironment
}
