package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteDocumentPermissionServerList = []string{
	"https://sync.twilio.com",
}

type DeleteDocumentPermissionPathParams struct {
	DocumentSid string `pathParam:"style=simple,explode=false,name=DocumentSid"`
	Identity    string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid  string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type DeleteDocumentPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteDocumentPermissionRequest struct {
	ServerURL  *string
	PathParams DeleteDocumentPermissionPathParams
	Security   DeleteDocumentPermissionSecurity
}

type DeleteDocumentPermissionResponse struct {
	ContentType string
	StatusCode  int64
}
