package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateWebhookServers = []string{
	"https://verify.twilio.com",
}

type UpdateWebhookPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateWebhookRequestBodyUpdateWebhookRequest struct {
	EventTypes   []string                       `form:"name=EventTypes"`
	FriendlyName *string                        `form:"name=FriendlyName"`
	Status       *shared.WebhookEnumStatusEnum  `form:"name=Status"`
	Version      *shared.WebhookEnumVersionEnum `form:"name=Version"`
	WebhookURL   *string                        `form:"name=WebhookUrl"`
}

type UpdateWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateWebhookRequest struct {
	ServerURL  *string
	PathParams UpdateWebhookPathParams
	Request    *UpdateWebhookRequestBodyUpdateWebhookRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateWebhookSecurity
}

type UpdateWebhookResponse struct {
	ContentType            string
	StatusCode             int64
	VerifyV2ServiceWebhook *shared.VerifyV2ServiceWebhook
}
