package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteOutgoingCallerIDServers = []string{
	"https://api.twilio.com",
}

type DeleteOutgoingCallerIDPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteOutgoingCallerIDSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteOutgoingCallerIDRequest struct {
	ServerURL  *string
	PathParams DeleteOutgoingCallerIDPathParams
	Security   DeleteOutgoingCallerIDSecurity
}

type DeleteOutgoingCallerIDResponse struct {
	ContentType string
	StatusCode  int64
}
