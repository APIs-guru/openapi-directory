package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTranscriptionServerList = []string{
	"https://api.twilio.com",
}

type FetchTranscriptionPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchTranscriptionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTranscriptionRequest struct {
	ServerURL  *string
	PathParams FetchTranscriptionPathParams
	Security   FetchTranscriptionSecurity
}

type FetchTranscriptionResponse struct {
	ContentType                  string
	StatusCode                   int64
	APIV2010AccountTranscription *shared.APIV2010AccountTranscription
}
