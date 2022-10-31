package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSyncDocumentServers = []string{
	"https://preview.twilio.com",
}

type DeleteSyncDocumentPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSyncDocumentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSyncDocumentRequest struct {
	ServerURL  *string
	PathParams DeleteSyncDocumentPathParams
	Security   DeleteSyncDocumentSecurity
}

type DeleteSyncDocumentResponse struct {
	ContentType string
	StatusCode  int64
}
