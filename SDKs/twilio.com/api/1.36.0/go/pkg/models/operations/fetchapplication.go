package operations

import (
	"openapi/pkg/models/shared"
)

var FetchApplicationServers = []string{
	"https://api.twilio.com",
}

type FetchApplicationPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchApplicationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchApplicationRequest struct {
	ServerURL  *string
	PathParams FetchApplicationPathParams
	Security   FetchApplicationSecurity
}

type FetchApplicationResponse struct {
	ContentType                string
	StatusCode                 int64
	APIV2010AccountApplication *shared.APIV2010AccountApplication
}
