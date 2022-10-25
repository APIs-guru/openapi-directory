package operations

import (
	"openapi/pkg/models/shared"
)

var CreateModelBuildServers = []string{
	"https://autopilot.twilio.com",
}

type CreateModelBuildPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type CreateModelBuildCreateModelBuildRequest struct {
	StatusCallback *string `form:"name=StatusCallback"`
	UniqueName     *string `form:"name=UniqueName"`
}

type CreateModelBuildSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateModelBuildRequest struct {
	ServerURL  *string
	PathParams CreateModelBuildPathParams
	Request    *CreateModelBuildCreateModelBuildRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateModelBuildSecurity
}

type CreateModelBuildResponse struct {
	ContentType                    string
	StatusCode                     int64
	AutopilotV1AssistantModelBuild *shared.AutopilotV1AssistantModelBuild
}
