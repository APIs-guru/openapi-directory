package operations

import (
	"openapi/pkg/models/shared"
)

var FetchDeploymentServerList = []string{
	"https://serverless.twilio.com",
}

type FetchDeploymentPathParams struct {
	EnvironmentSid string `pathParam:"style=simple,explode=false,name=EnvironmentSid"`
	ServiceSid     string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchDeploymentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchDeploymentRequest struct {
	ServerURL  *string
	PathParams FetchDeploymentPathParams
	Security   FetchDeploymentSecurity
}

type FetchDeploymentResponse struct {
	ContentType                              string
	StatusCode                               int64
	ServerlessV1ServiceEnvironmentDeployment *shared.ServerlessV1ServiceEnvironmentDeployment
}
