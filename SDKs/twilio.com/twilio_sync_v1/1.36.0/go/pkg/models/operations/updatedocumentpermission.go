package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateDocumentPermissionServers = []string{
	"https://sync.twilio.com",
}

type UpdateDocumentPermissionPathParams struct {
	DocumentSid string `pathParam:"style=simple,explode=false,name=DocumentSid"`
	Identity    string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid  string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type UpdateDocumentPermissionUpdateDocumentPermissionRequest struct {
	Manage bool `form:"name=Manage"`
	Read   bool `form:"name=Read"`
	Write  bool `form:"name=Write"`
}

type UpdateDocumentPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateDocumentPermissionRequest struct {
	ServerURL  *string
	PathParams UpdateDocumentPermissionPathParams
	Request    *UpdateDocumentPermissionUpdateDocumentPermissionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateDocumentPermissionSecurity
}

type UpdateDocumentPermissionResponse struct {
	ContentType                             string
	StatusCode                              int64
	SyncV1ServiceDocumentDocumentPermission *shared.SyncV1ServiceDocumentDocumentPermission
}
