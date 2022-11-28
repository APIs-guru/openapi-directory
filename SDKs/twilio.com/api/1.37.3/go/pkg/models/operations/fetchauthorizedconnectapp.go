package operations

import (
	"openapi/pkg/models/shared"
)

var FetchAuthorizedConnectAppServerList = []string{
	"https://api.twilio.com",
}

type FetchAuthorizedConnectAppPathParams struct {
	AccountSid    string `pathParam:"style=simple,explode=false,name=AccountSid"`
	ConnectAppSid string `pathParam:"style=simple,explode=false,name=ConnectAppSid"`
}

type FetchAuthorizedConnectAppSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchAuthorizedConnectAppRequest struct {
	ServerURL  *string
	PathParams FetchAuthorizedConnectAppPathParams
	Security   FetchAuthorizedConnectAppSecurity
}

type FetchAuthorizedConnectAppResponse struct {
	ContentType                         string
	StatusCode                          int64
	APIV2010AccountAuthorizedConnectApp *shared.APIV2010AccountAuthorizedConnectApp
}
