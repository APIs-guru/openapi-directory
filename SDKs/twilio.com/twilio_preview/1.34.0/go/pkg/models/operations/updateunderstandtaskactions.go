package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateUnderstandTaskActionsServers = []string{
	"https://preview.twilio.com",
}

type UpdateUnderstandTaskActionsPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type UpdateUnderstandTaskActionsRequestBodyUpdateUnderstandTaskActionsRequest struct {
	Actions *interface{} `form:"name=Actions"`
}

type UpdateUnderstandTaskActionsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUnderstandTaskActionsRequest struct {
	ServerURL  *string
	PathParams UpdateUnderstandTaskActionsPathParams
	Request    *UpdateUnderstandTaskActionsRequestBodyUpdateUnderstandTaskActionsRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUnderstandTaskActionsSecurity
}

type UpdateUnderstandTaskActionsResponse struct {
	ContentType                               string
	StatusCode                                int64
	PreviewUnderstandAssistantTaskTaskActions *shared.PreviewUnderstandAssistantTaskTaskActions
}
