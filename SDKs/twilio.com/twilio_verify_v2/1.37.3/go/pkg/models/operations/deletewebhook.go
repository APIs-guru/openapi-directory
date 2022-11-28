package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteWebhookServerList = []string{
	"https://verify.twilio.com",
}

type DeleteWebhookPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteWebhookRequest struct {
	ServerURL  *string
	PathParams DeleteWebhookPathParams
	Security   DeleteWebhookSecurity
}

type DeleteWebhookResponse struct {
	ContentType string
	StatusCode  int64
}
