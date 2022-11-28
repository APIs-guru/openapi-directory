package operations

import (
	"openapi/pkg/models/shared"
)

var CreateUserDefinedMessageServerList = []string{
	"https://api.twilio.com",
}

type CreateUserDefinedMessagePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
}

type CreateUserDefinedMessageCreateUserDefinedMessageRequest struct {
	Content        string  `form:"name=Content"`
	IdempotencyKey *string `form:"name=IdempotencyKey"`
}

type CreateUserDefinedMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateUserDefinedMessageRequest struct {
	ServerURL  *string
	PathParams CreateUserDefinedMessagePathParams
	Request    *CreateUserDefinedMessageCreateUserDefinedMessageRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateUserDefinedMessageSecurity
}

type CreateUserDefinedMessageResponse struct {
	ContentType                           string
	StatusCode                            int64
	APIV2010AccountCallUserDefinedMessage *shared.APIV2010AccountCallUserDefinedMessage
}
