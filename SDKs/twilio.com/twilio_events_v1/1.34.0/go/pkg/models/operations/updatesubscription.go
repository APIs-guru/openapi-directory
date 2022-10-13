package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSubscriptionServers = []string{
	"https://events.twilio.com",
}

type UpdateSubscriptionPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSubscriptionRequestBodyUpdateSubscriptionRequest struct {
	Description *string `form:"name=Description"`
	SinkSid     *string `form:"name=SinkSid"`
}

type UpdateSubscriptionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSubscriptionRequest struct {
	ServerURL  *string
	PathParams UpdateSubscriptionPathParams
	Request    *UpdateSubscriptionRequestBodyUpdateSubscriptionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSubscriptionSecurity
}

type UpdateSubscriptionResponse struct {
	ContentType          string
	StatusCode           int64
	EventsV1Subscription *shared.EventsV1Subscription
}
