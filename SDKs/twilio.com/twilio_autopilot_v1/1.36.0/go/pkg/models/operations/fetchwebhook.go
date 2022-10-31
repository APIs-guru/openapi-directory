package operations

import (
	"openapi/pkg/models/shared"
)

var FetchWebhookServers = []string{
	"https://autopilot.twilio.com",
}

type FetchWebhookPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWebhookRequest struct {
	ServerURL  *string
	PathParams FetchWebhookPathParams
	Security   FetchWebhookSecurity
}

type FetchWebhookResponse struct {
	ContentType                 string
	StatusCode                  int64
	AutopilotV1AssistantWebhook *shared.AutopilotV1AssistantWebhook
}
