package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateAssistantServerList = []string{
	"https://autopilot.twilio.com",
}

type UpdateAssistantPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateAssistantUpdateAssistantRequest struct {
	CallbackEvents   *string      `form:"name=CallbackEvents"`
	CallbackURL      *string      `form:"name=CallbackUrl"`
	Defaults         *interface{} `form:"name=Defaults"`
	DevelopmentStage *string      `form:"name=DevelopmentStage"`
	FriendlyName     *string      `form:"name=FriendlyName"`
	LogQueries       *bool        `form:"name=LogQueries"`
	StyleSheet       *interface{} `form:"name=StyleSheet"`
	UniqueName       *string      `form:"name=UniqueName"`
}

type UpdateAssistantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateAssistantRequest struct {
	ServerURL  *string
	PathParams UpdateAssistantPathParams
	Request    *UpdateAssistantUpdateAssistantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateAssistantSecurity
}

type UpdateAssistantResponse struct {
	ContentType          string
	StatusCode           int64
	AutopilotV1Assistant *shared.AutopilotV1Assistant
}
