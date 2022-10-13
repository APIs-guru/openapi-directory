package operations

import (
	"openapi/pkg/models/shared"
)

var FetchModelBuildServers = []string{
	"https://autopilot.twilio.com",
}

type FetchModelBuildPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchModelBuildSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchModelBuildRequest struct {
	ServerURL  *string
	PathParams FetchModelBuildPathParams
	Security   FetchModelBuildSecurity
}

type FetchModelBuildResponse struct {
	ContentType                    string
	StatusCode                     int64
	AutopilotV1AssistantModelBuild *shared.AutopilotV1AssistantModelBuild
}
