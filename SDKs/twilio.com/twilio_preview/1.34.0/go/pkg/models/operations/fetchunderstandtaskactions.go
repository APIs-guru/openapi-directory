package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUnderstandTaskActionsServers = []string{
	"https://preview.twilio.com",
}

type FetchUnderstandTaskActionsPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type FetchUnderstandTaskActionsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUnderstandTaskActionsRequest struct {
	ServerURL  *string
	PathParams FetchUnderstandTaskActionsPathParams
	Security   FetchUnderstandTaskActionsSecurity
}

type FetchUnderstandTaskActionsResponse struct {
	ContentType                               string
	StatusCode                                int64
	PreviewUnderstandAssistantTaskTaskActions *shared.PreviewUnderstandAssistantTaskTaskActions
}
