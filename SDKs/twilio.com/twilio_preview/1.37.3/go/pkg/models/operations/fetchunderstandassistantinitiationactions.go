package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUnderstandAssistantInitiationActionsServerList = []string{
	"https://preview.twilio.com",
}

type FetchUnderstandAssistantInitiationActionsPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type FetchUnderstandAssistantInitiationActionsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUnderstandAssistantInitiationActionsRequest struct {
	ServerURL  *string
	PathParams FetchUnderstandAssistantInitiationActionsPathParams
	Security   FetchUnderstandAssistantInitiationActionsSecurity
}

type FetchUnderstandAssistantInitiationActionsResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	PreviewUnderstandAssistantAssistantInitiationActions *shared.PreviewUnderstandAssistantAssistantInitiationActions
}
