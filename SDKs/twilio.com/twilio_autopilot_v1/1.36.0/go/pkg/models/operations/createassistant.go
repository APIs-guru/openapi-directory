package operations

import (
	"openapi/pkg/models/shared"
)

var CreateAssistantServers = []string{
	"https://autopilot.twilio.com",
}

type CreateAssistantCreateAssistantRequest struct {
	CallbackEvents *string      `form:"name=CallbackEvents"`
	CallbackURL    *string      `form:"name=CallbackUrl"`
	Defaults       *interface{} `form:"name=Defaults"`
	FriendlyName   *string      `form:"name=FriendlyName"`
	LogQueries     *bool        `form:"name=LogQueries"`
	StyleSheet     *interface{} `form:"name=StyleSheet"`
	UniqueName     *string      `form:"name=UniqueName"`
}

type CreateAssistantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateAssistantRequest struct {
	ServerURL *string
	Request   *CreateAssistantCreateAssistantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateAssistantSecurity
}

type CreateAssistantResponse struct {
	ContentType          string
	StatusCode           int64
	AutopilotV1Assistant *shared.AutopilotV1Assistant
}
