package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSyncListPermissionServerList = []string{
	"https://sync.twilio.com",
}

type UpdateSyncListPermissionPathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	ListSid    string `pathParam:"style=simple,explode=false,name=ListSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type UpdateSyncListPermissionUpdateSyncListPermissionRequest struct {
	Manage bool `form:"name=Manage"`
	Read   bool `form:"name=Read"`
	Write  bool `form:"name=Write"`
}

type UpdateSyncListPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSyncListPermissionRequest struct {
	ServerURL  *string
	PathParams UpdateSyncListPermissionPathParams
	Request    *UpdateSyncListPermissionUpdateSyncListPermissionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSyncListPermissionSecurity
}

type UpdateSyncListPermissionResponse struct {
	ContentType                             string
	StatusCode                              int64
	SyncV1ServiceSyncListSyncListPermission *shared.SyncV1ServiceSyncListSyncListPermission
}
