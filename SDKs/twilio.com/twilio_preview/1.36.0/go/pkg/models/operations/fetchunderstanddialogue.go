package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUnderstandDialogueServers = []string{
	"https://preview.twilio.com",
}

type FetchUnderstandDialoguePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchUnderstandDialogueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUnderstandDialogueRequest struct {
	ServerURL  *string
	PathParams FetchUnderstandDialoguePathParams
	Security   FetchUnderstandDialogueSecurity
}

type FetchUnderstandDialogueResponse struct {
	ContentType                        string
	StatusCode                         int64
	PreviewUnderstandAssistantDialogue *shared.PreviewUnderstandAssistantDialogue
}
