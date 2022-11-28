package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSinkServerList = []string{
	"https://events.twilio.com",
}

type DeleteSinkPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSinkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSinkRequest struct {
	ServerURL  *string
	PathParams DeleteSinkPathParams
	Security   DeleteSinkSecurity
}

type DeleteSinkResponse struct {
	ContentType string
	StatusCode  int64
}
