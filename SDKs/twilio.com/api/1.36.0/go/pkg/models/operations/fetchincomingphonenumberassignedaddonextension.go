package operations

import (
	"openapi/pkg/models/shared"
)

var FetchIncomingPhoneNumberAssignedAddOnExtensionServers = []string{
	"https://api.twilio.com",
}

type FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams struct {
	AccountSid       string `pathParam:"style=simple,explode=false,name=AccountSid"`
	AssignedAddOnSid string `pathParam:"style=simple,explode=false,name=AssignedAddOnSid"`
	ResourceSid      string `pathParam:"style=simple,explode=false,name=ResourceSid"`
	Sid              string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchIncomingPhoneNumberAssignedAddOnExtensionRequest struct {
	ServerURL  *string
	PathParams FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams
	Security   FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity
}

type FetchIncomingPhoneNumberAssignedAddOnExtensionResponse struct {
	ContentType                                                                                                 string
	StatusCode                                                                                                  int64
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension *shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension
}
