package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateUnderstandAssistantInitiationActionsServerList = []string{
	"https://preview.twilio.com",
}

type UpdateUnderstandAssistantInitiationActionsPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest struct {
	InitiationActions *interface{} `form:"name=InitiationActions"`
}

type UpdateUnderstandAssistantInitiationActionsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUnderstandAssistantInitiationActionsRequest struct {
	ServerURL  *string
	PathParams UpdateUnderstandAssistantInitiationActionsPathParams
	Request    *UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUnderstandAssistantInitiationActionsSecurity
}

type UpdateUnderstandAssistantInitiationActionsResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	PreviewUnderstandAssistantAssistantInitiationActions *shared.PreviewUnderstandAssistantAssistantInitiationActions
}
