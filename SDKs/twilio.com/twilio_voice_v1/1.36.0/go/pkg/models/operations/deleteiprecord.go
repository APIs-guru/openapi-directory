package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteIPRecordServers = []string{
	"https://voice.twilio.com",
}

type DeleteIPRecordPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteIPRecordSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteIPRecordRequest struct {
	ServerURL  *string
	PathParams DeleteIPRecordPathParams
	Security   DeleteIPRecordSecurity
}

type DeleteIPRecordResponse struct {
	ContentType string
	StatusCode  int64
}
