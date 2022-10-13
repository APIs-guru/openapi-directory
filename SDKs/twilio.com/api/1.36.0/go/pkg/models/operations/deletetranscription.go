package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteTranscriptionServers = []string{
	"https://api.twilio.com",
}

type DeleteTranscriptionPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteTranscriptionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteTranscriptionRequest struct {
	ServerURL  *string
	PathParams DeleteTranscriptionPathParams
	Security   DeleteTranscriptionSecurity
}

type DeleteTranscriptionResponse struct {
	ContentType string
	StatusCode  int64
}
