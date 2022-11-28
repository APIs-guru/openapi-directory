package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSubscribedEventServerList = []string{
	"https://events.twilio.com",
}

type FetchSubscribedEventPathParams struct {
	SubscriptionSid string `pathParam:"style=simple,explode=false,name=SubscriptionSid"`
	Type            string `pathParam:"style=simple,explode=false,name=Type"`
}

type FetchSubscribedEventSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSubscribedEventRequest struct {
	ServerURL  *string
	PathParams FetchSubscribedEventPathParams
	Security   FetchSubscribedEventSecurity
}

type FetchSubscribedEventResponse struct {
	ContentType                         string
	StatusCode                          int64
	EventsV1SubscriptionSubscribedEvent *shared.EventsV1SubscriptionSubscribedEvent
}
