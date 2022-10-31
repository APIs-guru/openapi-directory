package operations

import (
	"openapi/pkg/models/shared"
)

var FetchDocumentPermissionServers = []string{
	"https://sync.twilio.com",
}

type FetchDocumentPermissionPathParams struct {
	DocumentSid string `pathParam:"style=simple,explode=false,name=DocumentSid"`
	Identity    string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid  string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type FetchDocumentPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchDocumentPermissionRequest struct {
	ServerURL  *string
	PathParams FetchDocumentPermissionPathParams
	Security   FetchDocumentPermissionSecurity
}

type FetchDocumentPermissionResponse struct {
	ContentType                             string
	StatusCode                              int64
	SyncV1ServiceDocumentDocumentPermission *shared.SyncV1ServiceDocumentDocumentPermission
}
