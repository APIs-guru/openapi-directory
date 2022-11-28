package operations

import (
	"openapi/pkg/models/shared"
)

var CreatePhoneNumberServerList = []string{
	"https://messaging.twilio.com",
}

type CreatePhoneNumberPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreatePhoneNumberCreatePhoneNumberRequest struct {
	PhoneNumberSid string `form:"name=PhoneNumberSid"`
}

type CreatePhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreatePhoneNumberRequest struct {
	ServerURL  *string
	PathParams CreatePhoneNumberPathParams
	Request    *CreatePhoneNumberCreatePhoneNumberRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreatePhoneNumberSecurity
}

type CreatePhoneNumberResponse struct {
	ContentType                   string
	StatusCode                    int64
	MessagingV1ServicePhoneNumber *shared.MessagingV1ServicePhoneNumber
}
