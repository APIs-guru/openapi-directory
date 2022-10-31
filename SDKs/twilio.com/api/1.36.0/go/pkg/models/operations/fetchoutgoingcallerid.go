package operations

import (
	"openapi/pkg/models/shared"
)

var FetchOutgoingCallerIDServers = []string{
	"https://api.twilio.com",
}

type FetchOutgoingCallerIDPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchOutgoingCallerIDSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchOutgoingCallerIDRequest struct {
	ServerURL  *string
	PathParams FetchOutgoingCallerIDPathParams
	Security   FetchOutgoingCallerIDSecurity
}

type FetchOutgoingCallerIDResponse struct {
	ContentType                     string
	StatusCode                      int64
	APIV2010AccountOutgoingCallerID *shared.APIV2010AccountOutgoingCallerID
}
