package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateRestoreAssistantServers = []string{
	"https://autopilot.twilio.com",
}

type UpdateRestoreAssistantRequestBodyUpdateRestoreAssistantRequest struct {
	Assistant string `form:"name=Assistant"`
}

type UpdateRestoreAssistantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateRestoreAssistantRequest struct {
	ServerURL *string
	Request   *UpdateRestoreAssistantRequestBodyUpdateRestoreAssistantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  UpdateRestoreAssistantSecurity
}

type UpdateRestoreAssistantResponse struct {
	ContentType                 string
	StatusCode                  int64
	AutopilotV1RestoreAssistant *shared.AutopilotV1RestoreAssistant
}
