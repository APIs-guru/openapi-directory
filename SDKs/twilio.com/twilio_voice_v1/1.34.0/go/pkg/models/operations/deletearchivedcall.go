package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var DeleteArchivedCallServers = []string{
	"https://voice.twilio.com",
}

type DeleteArchivedCallPathParams struct {
	Date time.Time `pathParam:"style=simple,explode=false,name=Date"`
	Sid  string    `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteArchivedCallSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteArchivedCallRequest struct {
	ServerURL  *string
	PathParams DeleteArchivedCallPathParams
	Security   DeleteArchivedCallSecurity
}

type DeleteArchivedCallResponse struct {
	ContentType string
	StatusCode  int64
}
