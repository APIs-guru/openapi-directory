package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSafelistServerList = []string{
	"https://verify.twilio.com",
}

type DeleteSafelistPathParams struct {
	PhoneNumber string `pathParam:"style=simple,explode=false,name=PhoneNumber"`
}

type DeleteSafelistSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSafelistRequest struct {
	ServerURL  *string
	PathParams DeleteSafelistPathParams
	Security   DeleteSafelistSecurity
}

type DeleteSafelistResponse struct {
	ContentType string
	StatusCode  int64
}
