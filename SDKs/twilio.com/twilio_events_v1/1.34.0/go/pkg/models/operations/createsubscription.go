package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSubscriptionServers = []string{
	"https://events.twilio.com",
}

type CreateSubscriptionRequestBodyCreateSubscriptionRequest struct {
	Description string        `form:"name=Description"`
	SinkSid     string        `form:"name=SinkSid"`
	Types       []interface{} `form:"name=Types"`
}

type CreateSubscriptionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSubscriptionRequest struct {
	ServerURL *string
	Request   *CreateSubscriptionRequestBodyCreateSubscriptionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateSubscriptionSecurity
}

type CreateSubscriptionResponse struct {
	ContentType          string
	StatusCode           int64
	EventsV1Subscription *shared.EventsV1Subscription
}
