package operations

import (
	"openapi/pkg/models/shared"
)

var FetchIncomingPhoneNumberAssignedAddOnServers = []string{
	"https://api.twilio.com",
}

type FetchIncomingPhoneNumberAssignedAddOnPathParams struct {
	AccountSid  string `pathParam:"style=simple,explode=false,name=AccountSid"`
	ResourceSid string `pathParam:"style=simple,explode=false,name=ResourceSid"`
	Sid         string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchIncomingPhoneNumberAssignedAddOnSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchIncomingPhoneNumberAssignedAddOnRequest struct {
	ServerURL  *string
	PathParams FetchIncomingPhoneNumberAssignedAddOnPathParams
	Security   FetchIncomingPhoneNumberAssignedAddOnSecurity
}

type FetchIncomingPhoneNumberAssignedAddOnResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn *shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn
}
