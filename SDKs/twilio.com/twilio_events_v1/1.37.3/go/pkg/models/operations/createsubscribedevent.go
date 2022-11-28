package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSubscribedEventServerList = []string{
	"https://events.twilio.com",
}

type CreateSubscribedEventPathParams struct {
	SubscriptionSid string `pathParam:"style=simple,explode=false,name=SubscriptionSid"`
}

type CreateSubscribedEventCreateSubscribedEventRequest struct {
	SchemaVersion *int64 `form:"name=SchemaVersion"`
	Type          string `form:"name=Type"`
}

type CreateSubscribedEventSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSubscribedEventRequest struct {
	ServerURL  *string
	PathParams CreateSubscribedEventPathParams
	Request    *CreateSubscribedEventCreateSubscribedEventRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSubscribedEventSecurity
}

type CreateSubscribedEventResponse struct {
	ContentType                         string
	StatusCode                          int64
	EventsV1SubscriptionSubscribedEvent *shared.EventsV1SubscriptionSubscribedEvent
}
