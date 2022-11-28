package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSubscribedEventServerList = []string{
	"https://events.twilio.com",
}

type UpdateSubscribedEventPathParams struct {
	SubscriptionSid string `pathParam:"style=simple,explode=false,name=SubscriptionSid"`
	Type            string `pathParam:"style=simple,explode=false,name=Type"`
}

type UpdateSubscribedEventUpdateSubscribedEventRequest struct {
	SchemaVersion *int64 `form:"name=SchemaVersion"`
}

type UpdateSubscribedEventSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSubscribedEventRequest struct {
	ServerURL  *string
	PathParams UpdateSubscribedEventPathParams
	Request    *UpdateSubscribedEventUpdateSubscribedEventRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSubscribedEventSecurity
}

type UpdateSubscribedEventResponse struct {
	ContentType                         string
	StatusCode                          int64
	EventsV1SubscriptionSubscribedEvent *shared.EventsV1SubscriptionSubscribedEvent
}
