package operations

import (
	"openapi/pkg/models/shared"
)

var CreateUserDefinedMessageSubscriptionServerList = []string{
	"https://api.twilio.com",
}

type CreateUserDefinedMessageSubscriptionPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
}

type CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum string

const (
	CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnumHead   CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum = "HEAD"
	CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnumGet    CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum = "GET"
	CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnumPost   CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum = "POST"
	CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnumPatch  CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum = "PATCH"
	CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnumPut    CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum = "PUT"
	CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnumDelete CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum = "DELETE"
)

type CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest struct {
	Callback       string                                                                                    `form:"name=Callback"`
	IdempotencyKey *string                                                                                   `form:"name=IdempotencyKey"`
	Method         CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum `form:"name=Method"`
}

type CreateUserDefinedMessageSubscriptionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateUserDefinedMessageSubscriptionRequest struct {
	ServerURL  *string
	PathParams CreateUserDefinedMessageSubscriptionPathParams
	Request    *CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateUserDefinedMessageSubscriptionSecurity
}

type CreateUserDefinedMessageSubscriptionResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	APIV2010AccountCallUserDefinedMessageSubscription *shared.APIV2010AccountCallUserDefinedMessageSubscription
}
