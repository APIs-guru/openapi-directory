package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTaskActionsServers = []string{
	"https://autopilot.twilio.com",
}

type FetchTaskActionsPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type FetchTaskActionsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTaskActionsRequest struct {
	ServerURL  *string
	PathParams FetchTaskActionsPathParams
	Security   FetchTaskActionsSecurity
}

type FetchTaskActionsResponse struct {
	ContentType                         string
	StatusCode                          int64
	AutopilotV1AssistantTaskTaskActions *shared.AutopilotV1AssistantTaskTaskActions
}
