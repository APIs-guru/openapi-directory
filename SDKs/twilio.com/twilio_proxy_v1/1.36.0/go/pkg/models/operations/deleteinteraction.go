package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteInteractionServers = []string{
	"https://proxy.twilio.com",
}

type DeleteInteractionPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	SessionSid string `pathParam:"style=simple,explode=false,name=SessionSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteInteractionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteInteractionRequest struct {
	ServerURL  *string
	PathParams DeleteInteractionPathParams
	Security   DeleteInteractionSecurity
}

type DeleteInteractionResponse struct {
	ContentType string
	StatusCode  int64
}
