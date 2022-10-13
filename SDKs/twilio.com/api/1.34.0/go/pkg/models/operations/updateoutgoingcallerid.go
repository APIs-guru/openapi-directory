package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateOutgoingCallerIDServers = []string{
	"https://api.twilio.com",
}

type UpdateOutgoingCallerIDPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateOutgoingCallerIDRequestBodyUpdateOutgoingCallerIDRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
}

type UpdateOutgoingCallerIDSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateOutgoingCallerIDRequest struct {
	ServerURL  *string
	PathParams UpdateOutgoingCallerIDPathParams
	Request    *UpdateOutgoingCallerIDRequestBodyUpdateOutgoingCallerIDRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateOutgoingCallerIDSecurity
}

type UpdateOutgoingCallerIDResponse struct {
	ContentType                     string
	StatusCode                      int64
	APIV2010AccountOutgoingCallerID *shared.APIV2010AccountOutgoingCallerID
}
