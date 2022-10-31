package operations

import (
	"openapi/pkg/models/shared"
)

var FetchDocumentServers = []string{
	"https://sync.twilio.com",
}

type FetchDocumentPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchDocumentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchDocumentRequest struct {
	ServerURL  *string
	PathParams FetchDocumentPathParams
	Security   FetchDocumentSecurity
}

type FetchDocumentResponse struct {
	ContentType           string
	StatusCode            int64
	SyncV1ServiceDocument *shared.SyncV1ServiceDocument
}
