package operations

import (
	"openapi/pkg/models/shared"
)

var FetchLogServerList = []string{
	"https://serverless.twilio.com",
}

type FetchLogPathParams struct {
	EnvironmentSid string `pathParam:"style=simple,explode=false,name=EnvironmentSid"`
	ServiceSid     string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchLogSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchLogRequest struct {
	ServerURL  *string
	PathParams FetchLogPathParams
	Security   FetchLogSecurity
}

type FetchLogResponse struct {
	ContentType                       string
	StatusCode                        int64
	ServerlessV1ServiceEnvironmentLog *shared.ServerlessV1ServiceEnvironmentLog
}
