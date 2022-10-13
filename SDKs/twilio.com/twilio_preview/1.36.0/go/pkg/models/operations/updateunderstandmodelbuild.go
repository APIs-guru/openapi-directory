package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateUnderstandModelBuildServers = []string{
	"https://preview.twilio.com",
}

type UpdateUnderstandModelBuildPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateUnderstandModelBuildRequestBodyUpdateUnderstandModelBuildRequest struct {
	UniqueName *string `form:"name=UniqueName"`
}

type UpdateUnderstandModelBuildSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUnderstandModelBuildRequest struct {
	ServerURL  *string
	PathParams UpdateUnderstandModelBuildPathParams
	Request    *UpdateUnderstandModelBuildRequestBodyUpdateUnderstandModelBuildRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUnderstandModelBuildSecurity
}

type UpdateUnderstandModelBuildResponse struct {
	ContentType                          string
	StatusCode                           int64
	PreviewUnderstandAssistantModelBuild *shared.PreviewUnderstandAssistantModelBuild
}
