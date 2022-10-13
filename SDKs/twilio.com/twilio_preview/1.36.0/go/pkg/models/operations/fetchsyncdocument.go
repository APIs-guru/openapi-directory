package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSyncDocumentServers = []string{
	"https://preview.twilio.com",
}

type FetchSyncDocumentPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSyncDocumentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSyncDocumentRequest struct {
	ServerURL  *string
	PathParams FetchSyncDocumentPathParams
	Security   FetchSyncDocumentSecurity
}

type FetchSyncDocumentResponse struct {
	ContentType                string
	StatusCode                 int64
	PreviewSyncServiceDocument *shared.PreviewSyncServiceDocument
}
