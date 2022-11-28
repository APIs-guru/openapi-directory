package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateUnderstandModelBuildServerList = []string{
	"https://preview.twilio.com",
}

type UpdateUnderstandModelBuildPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest struct {
	UniqueName *string `form:"name=UniqueName"`
}

type UpdateUnderstandModelBuildSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUnderstandModelBuildRequest struct {
	ServerURL  *string
	PathParams UpdateUnderstandModelBuildPathParams
	Request    *UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUnderstandModelBuildSecurity
}

type UpdateUnderstandModelBuildResponse struct {
	ContentType                          string
	StatusCode                           int64
	PreviewUnderstandAssistantModelBuild *shared.PreviewUnderstandAssistantModelBuild
}
