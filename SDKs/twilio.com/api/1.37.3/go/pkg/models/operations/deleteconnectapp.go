package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteConnectAppServerList = []string{
	"https://api.twilio.com",
}

type DeleteConnectAppPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteConnectAppSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteConnectAppRequest struct {
	ServerURL  *string
	PathParams DeleteConnectAppPathParams
	Security   DeleteConnectAppSecurity
}

type DeleteConnectAppResponse struct {
	ContentType string
	StatusCode  int64
}
