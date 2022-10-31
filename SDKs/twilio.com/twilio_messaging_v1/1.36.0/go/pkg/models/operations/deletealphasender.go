package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteAlphaSenderServers = []string{
	"https://messaging.twilio.com",
}

type DeleteAlphaSenderPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteAlphaSenderSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteAlphaSenderRequest struct {
	ServerURL  *string
	PathParams DeleteAlphaSenderPathParams
	Security   DeleteAlphaSenderSecurity
}

type DeleteAlphaSenderResponse struct {
	ContentType string
	StatusCode  int64
}
