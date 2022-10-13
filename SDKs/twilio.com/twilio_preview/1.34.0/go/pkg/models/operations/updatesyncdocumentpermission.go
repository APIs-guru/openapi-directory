package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSyncDocumentPermissionServers = []string{
	"https://preview.twilio.com",
}

type UpdateSyncDocumentPermissionPathParams struct {
	DocumentSid string `pathParam:"style=simple,explode=false,name=DocumentSid"`
	Identity    string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid  string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type UpdateSyncDocumentPermissionRequestBodyUpdateSyncDocumentPermissionRequest struct {
	Manage bool `form:"name=Manage"`
	Read   bool `form:"name=Read"`
	Write  bool `form:"name=Write"`
}

type UpdateSyncDocumentPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSyncDocumentPermissionRequest struct {
	ServerURL  *string
	PathParams UpdateSyncDocumentPermissionPathParams
	Request    *UpdateSyncDocumentPermissionRequestBodyUpdateSyncDocumentPermissionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSyncDocumentPermissionSecurity
}

type UpdateSyncDocumentPermissionResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	PreviewSyncServiceDocumentDocumentPermission *shared.PreviewSyncServiceDocumentDocumentPermission
}
