package operations

import (
	"openapi/pkg/models/shared"
)

var CreateIncomingPhoneNumberAssignedAddOnServers = []string{
	"https://api.twilio.com",
}

type CreateIncomingPhoneNumberAssignedAddOnPathParams struct {
	AccountSid  string `pathParam:"style=simple,explode=false,name=AccountSid"`
	ResourceSid string `pathParam:"style=simple,explode=false,name=ResourceSid"`
}

type CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest struct {
	InstalledAddOnSid string `form:"name=InstalledAddOnSid"`
}

type CreateIncomingPhoneNumberAssignedAddOnSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateIncomingPhoneNumberAssignedAddOnRequest struct {
	ServerURL  *string
	PathParams CreateIncomingPhoneNumberAssignedAddOnPathParams
	Request    *CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateIncomingPhoneNumberAssignedAddOnSecurity
}

type CreateIncomingPhoneNumberAssignedAddOnResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn *shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn
}
