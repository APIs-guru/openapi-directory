package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSyncDocumentPermissionServers = []string{
	"https://preview.twilio.com",
}

type FetchSyncDocumentPermissionPathParams struct {
	DocumentSid string `pathParam:"style=simple,explode=false,name=DocumentSid"`
	Identity    string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid  string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type FetchSyncDocumentPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSyncDocumentPermissionRequest struct {
	ServerURL  *string
	PathParams FetchSyncDocumentPermissionPathParams
	Security   FetchSyncDocumentPermissionSecurity
}

type FetchSyncDocumentPermissionResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	PreviewSyncServiceDocumentDocumentPermission *shared.PreviewSyncServiceDocumentDocumentPermission
}
