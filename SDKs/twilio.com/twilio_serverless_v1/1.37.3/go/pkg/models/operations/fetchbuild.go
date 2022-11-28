package operations

import (
	"openapi/pkg/models/shared"
)

var FetchBuildServerList = []string{
	"https://serverless.twilio.com",
}

type FetchBuildPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchBuildSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchBuildRequest struct {
	ServerURL  *string
	PathParams FetchBuildPathParams
	Security   FetchBuildSecurity
}

type FetchBuildResponse struct {
	ContentType              string
	StatusCode               int64
	ServerlessV1ServiceBuild *shared.ServerlessV1ServiceBuild
}
