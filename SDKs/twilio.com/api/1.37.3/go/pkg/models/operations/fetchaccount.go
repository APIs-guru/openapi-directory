package operations

import (
	"openapi/pkg/models/shared"
)

var FetchAccountServerList = []string{
	"https://api.twilio.com",
}

type FetchAccountPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchAccountSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchAccountRequest struct {
	ServerURL  *string
	PathParams FetchAccountPathParams
	Security   FetchAccountSecurity
}

type FetchAccountResponse struct {
	ContentType     string
	StatusCode      int64
	APIV2010Account *shared.APIV2010Account
}
