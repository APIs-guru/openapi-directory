package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSyncDocumentPermissionServerList = []string{
	"https://preview.twilio.com",
}

type DeleteSyncDocumentPermissionPathParams struct {
	DocumentSid string `pathParam:"style=simple,explode=false,name=DocumentSid"`
	Identity    string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid  string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type DeleteSyncDocumentPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSyncDocumentPermissionRequest struct {
	ServerURL  *string
	PathParams DeleteSyncDocumentPermissionPathParams
	Security   DeleteSyncDocumentPermissionSecurity
}

type DeleteSyncDocumentPermissionResponse struct {
	ContentType string
	StatusCode  int64
}
