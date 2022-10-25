package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateModelBuildServers = []string{
	"https://autopilot.twilio.com",
}

type UpdateModelBuildPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateModelBuildUpdateModelBuildRequest struct {
	UniqueName *string `form:"name=UniqueName"`
}

type UpdateModelBuildSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateModelBuildRequest struct {
	ServerURL  *string
	PathParams UpdateModelBuildPathParams
	Request    *UpdateModelBuildUpdateModelBuildRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateModelBuildSecurity
}

type UpdateModelBuildResponse struct {
	ContentType                    string
	StatusCode                     int64
	AutopilotV1AssistantModelBuild *shared.AutopilotV1AssistantModelBuild
}
