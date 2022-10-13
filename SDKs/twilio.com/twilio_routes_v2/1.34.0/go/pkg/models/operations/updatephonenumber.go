package operations

import (
	"openapi/pkg/models/shared"
)

var UpdatePhoneNumberServers = []string{
	"https://routes.twilio.com",
}

type UpdatePhoneNumberPathParams struct {
	PhoneNumber string `pathParam:"style=simple,explode=false,name=PhoneNumber"`
}

type UpdatePhoneNumberRequestBodyUpdatePhoneNumberRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
	VoiceRegion  *string `form:"name=VoiceRegion"`
}

type UpdatePhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdatePhoneNumberRequest struct {
	ServerURL  *string
	PathParams UpdatePhoneNumberPathParams
	Request    *UpdatePhoneNumberRequestBodyUpdatePhoneNumberRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdatePhoneNumberSecurity
}

type UpdatePhoneNumberResponse struct {
	ContentType         string
	StatusCode          int64
	RoutesV2PhoneNumber *shared.RoutesV2PhoneNumber
}
