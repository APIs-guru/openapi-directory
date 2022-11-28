package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteIncomingPhoneNumberAssignedAddOnServerList = []string{
	"https://api.twilio.com",
}

type DeleteIncomingPhoneNumberAssignedAddOnPathParams struct {
	AccountSid  string `pathParam:"style=simple,explode=false,name=AccountSid"`
	ResourceSid string `pathParam:"style=simple,explode=false,name=ResourceSid"`
	Sid         string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteIncomingPhoneNumberAssignedAddOnSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteIncomingPhoneNumberAssignedAddOnRequest struct {
	ServerURL  *string
	PathParams DeleteIncomingPhoneNumberAssignedAddOnPathParams
	Security   DeleteIncomingPhoneNumberAssignedAddOnSecurity
}

type DeleteIncomingPhoneNumberAssignedAddOnResponse struct {
	ContentType string
	StatusCode  int64
}
