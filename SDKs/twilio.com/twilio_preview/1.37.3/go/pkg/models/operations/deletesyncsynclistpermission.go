package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSyncSyncListPermissionServerList = []string{
	"https://preview.twilio.com",
}

type DeleteSyncSyncListPermissionPathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	ListSid    string `pathParam:"style=simple,explode=false,name=ListSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type DeleteSyncSyncListPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSyncSyncListPermissionRequest struct {
	ServerURL  *string
	PathParams DeleteSyncSyncListPermissionPathParams
	Security   DeleteSyncSyncListPermissionSecurity
}

type DeleteSyncSyncListPermissionResponse struct {
	ContentType string
	StatusCode  int64
}
