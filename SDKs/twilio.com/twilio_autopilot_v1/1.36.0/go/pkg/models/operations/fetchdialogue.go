package operations

import (
	"openapi/pkg/models/shared"
)

var FetchDialogueServers = []string{
	"https://autopilot.twilio.com",
}

type FetchDialoguePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchDialogueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchDialogueRequest struct {
	ServerURL  *string
	PathParams FetchDialoguePathParams
	Security   FetchDialogueSecurity
}

type FetchDialogueResponse struct {
	ContentType                  string
	StatusCode                   int64
	AutopilotV1AssistantDialogue *shared.AutopilotV1AssistantDialogue
}
