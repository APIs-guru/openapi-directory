package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateWebhookServers = []string{
	"https://autopilot.twilio.com",
}

type UpdateWebhookPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateWebhookUpdateWebhookRequest struct {
	Events        *string `form:"name=Events"`
	UniqueName    *string `form:"name=UniqueName"`
	WebhookMethod *string `form:"name=WebhookMethod"`
	WebhookURL    *string `form:"name=WebhookUrl"`
}

type UpdateWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateWebhookRequest struct {
	ServerURL  *string
	PathParams UpdateWebhookPathParams
	Request    *UpdateWebhookUpdateWebhookRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateWebhookSecurity
}

type UpdateWebhookResponse struct {
	ContentType                 string
	StatusCode                  int64
	AutopilotV1AssistantWebhook *shared.AutopilotV1AssistantWebhook
}
