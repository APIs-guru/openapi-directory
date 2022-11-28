package operations

import (
	"openapi/pkg/models/shared"
)

var CreateWebhookServerList = []string{
	"https://autopilot.twilio.com",
}

type CreateWebhookPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type CreateWebhookCreateWebhookRequest struct {
	Events        string  `form:"name=Events"`
	UniqueName    string  `form:"name=UniqueName"`
	WebhookMethod *string `form:"name=WebhookMethod"`
	WebhookURL    string  `form:"name=WebhookUrl"`
}

type CreateWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateWebhookRequest struct {
	ServerURL  *string
	PathParams CreateWebhookPathParams
	Request    *CreateWebhookCreateWebhookRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateWebhookSecurity
}

type CreateWebhookResponse struct {
	ContentType                 string
	StatusCode                  int64
	AutopilotV1AssistantWebhook *shared.AutopilotV1AssistantWebhook
}
