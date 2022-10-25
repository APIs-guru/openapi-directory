package operations

import (
	"openapi/pkg/models/shared"
)

var CreateWebhookServers = []string{
	"https://verify.twilio.com",
}

type CreateWebhookPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateWebhookCreateWebhookRequest struct {
	EventTypes   []string                       `form:"name=EventTypes"`
	FriendlyName string                         `form:"name=FriendlyName"`
	Status       *shared.WebhookEnumStatusEnum  `form:"name=Status"`
	Version      *shared.WebhookEnumVersionEnum `form:"name=Version"`
	WebhookURL   string                         `form:"name=WebhookUrl"`
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
	ContentType            string
	StatusCode             int64
	VerifyV2ServiceWebhook *shared.VerifyV2ServiceWebhook
}
