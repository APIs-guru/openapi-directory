package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSyncListPermissionServers = []string{
	"https://sync.twilio.com",
}

type DeleteSyncListPermissionPathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	ListSid    string `pathParam:"style=simple,explode=false,name=ListSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type DeleteSyncListPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSyncListPermissionRequest struct {
	ServerURL  *string
	PathParams DeleteSyncListPermissionPathParams
	Security   DeleteSyncListPermissionSecurity
}

type DeleteSyncListPermissionResponse struct {
	ContentType string
	StatusCode  int64
}
