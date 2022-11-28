package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUnderstandAssistantFallbackActionsServerList = []string{
	"https://preview.twilio.com",
}

type FetchUnderstandAssistantFallbackActionsPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type FetchUnderstandAssistantFallbackActionsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUnderstandAssistantFallbackActionsRequest struct {
	ServerURL  *string
	PathParams FetchUnderstandAssistantFallbackActionsPathParams
	Security   FetchUnderstandAssistantFallbackActionsSecurity
}

type FetchUnderstandAssistantFallbackActionsResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	PreviewUnderstandAssistantAssistantFallbackActions *shared.PreviewUnderstandAssistantAssistantFallbackActions
}
