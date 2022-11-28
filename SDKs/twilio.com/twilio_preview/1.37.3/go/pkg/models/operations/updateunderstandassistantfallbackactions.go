package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateUnderstandAssistantFallbackActionsServerList = []string{
	"https://preview.twilio.com",
}

type UpdateUnderstandAssistantFallbackActionsPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest struct {
	FallbackActions *interface{} `form:"name=FallbackActions"`
}

type UpdateUnderstandAssistantFallbackActionsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUnderstandAssistantFallbackActionsRequest struct {
	ServerURL  *string
	PathParams UpdateUnderstandAssistantFallbackActionsPathParams
	Request    *UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUnderstandAssistantFallbackActionsSecurity
}

type UpdateUnderstandAssistantFallbackActionsResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	PreviewUnderstandAssistantAssistantFallbackActions *shared.PreviewUnderstandAssistantAssistantFallbackActions
}
