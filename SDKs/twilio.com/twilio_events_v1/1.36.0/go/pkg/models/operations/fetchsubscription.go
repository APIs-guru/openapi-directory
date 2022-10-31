package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSubscriptionServers = []string{
	"https://events.twilio.com",
}

type FetchSubscriptionPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSubscriptionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSubscriptionRequest struct {
	ServerURL  *string
	PathParams FetchSubscriptionPathParams
	Security   FetchSubscriptionSecurity
}

type FetchSubscriptionResponse struct {
	ContentType          string
	StatusCode           int64
	EventsV1Subscription *shared.EventsV1Subscription
}
