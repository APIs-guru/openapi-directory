package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSafelistServerList = []string{
	"https://verify.twilio.com",
}

type FetchSafelistPathParams struct {
	PhoneNumber string `pathParam:"style=simple,explode=false,name=PhoneNumber"`
}

type FetchSafelistSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSafelistRequest struct {
	ServerURL  *string
	PathParams FetchSafelistPathParams
	Security   FetchSafelistSecurity
}

type FetchSafelistResponse struct {
	ContentType      string
	StatusCode       int64
	VerifyV2Safelist *shared.VerifyV2Safelist
}
