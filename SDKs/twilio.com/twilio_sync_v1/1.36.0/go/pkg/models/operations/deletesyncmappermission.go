package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSyncMapPermissionServers = []string{
	"https://sync.twilio.com",
}

type DeleteSyncMapPermissionPathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type DeleteSyncMapPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSyncMapPermissionRequest struct {
	ServerURL  *string
	PathParams DeleteSyncMapPermissionPathParams
	Security   DeleteSyncMapPermissionSecurity
}

type DeleteSyncMapPermissionResponse struct {
	ContentType string
	StatusCode  int64
}
