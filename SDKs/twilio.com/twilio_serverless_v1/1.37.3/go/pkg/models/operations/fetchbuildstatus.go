package operations

import (
	"openapi/pkg/models/shared"
)

var FetchBuildStatusServerList = []string{
	"https://serverless.twilio.com",
}

type FetchBuildStatusPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchBuildStatusSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchBuildStatusRequest struct {
	ServerURL  *string
	PathParams FetchBuildStatusPathParams
	Security   FetchBuildStatusSecurity
}

type FetchBuildStatusResponse struct {
	ContentType                         string
	StatusCode                          int64
	ServerlessV1ServiceBuildBuildStatus *shared.ServerlessV1ServiceBuildBuildStatus
}
