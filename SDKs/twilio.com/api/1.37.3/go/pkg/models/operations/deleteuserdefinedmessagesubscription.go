package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteUserDefinedMessageSubscriptionServerList = []string{
	"https://api.twilio.com",
}

type DeleteUserDefinedMessageSubscriptionPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteUserDefinedMessageSubscriptionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteUserDefinedMessageSubscriptionRequest struct {
	ServerURL  *string
	PathParams DeleteUserDefinedMessageSubscriptionPathParams
	Security   DeleteUserDefinedMessageSubscriptionSecurity
}

type DeleteUserDefinedMessageSubscriptionResponse struct {
	ContentType string
	StatusCode  int64
}
