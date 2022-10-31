package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSubscriptionServers = []string{
	"https://events.twilio.com",
}

type DeleteSubscriptionPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSubscriptionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSubscriptionRequest struct {
	ServerURL  *string
	PathParams DeleteSubscriptionPathParams
	Security   DeleteSubscriptionSecurity
}

type DeleteSubscriptionResponse struct {
	ContentType string
	StatusCode  int64
}
