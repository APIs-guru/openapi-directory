package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSyncMapPermissionServerList = []string{
	"https://sync.twilio.com",
}

type FetchSyncMapPermissionPathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type FetchSyncMapPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSyncMapPermissionRequest struct {
	ServerURL  *string
	PathParams FetchSyncMapPermissionPathParams
	Security   FetchSyncMapPermissionSecurity
}

type FetchSyncMapPermissionResponse struct {
	ContentType                           string
	StatusCode                            int64
	SyncV1ServiceSyncMapSyncMapPermission *shared.SyncV1ServiceSyncMapSyncMapPermission
}
