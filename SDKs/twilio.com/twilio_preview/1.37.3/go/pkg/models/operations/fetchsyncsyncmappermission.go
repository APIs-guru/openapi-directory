package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSyncSyncMapPermissionServerList = []string{
	"https://preview.twilio.com",
}

type FetchSyncSyncMapPermissionPathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type FetchSyncSyncMapPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSyncSyncMapPermissionRequest struct {
	ServerURL  *string
	PathParams FetchSyncSyncMapPermissionPathParams
	Security   FetchSyncSyncMapPermissionSecurity
}

type FetchSyncSyncMapPermissionResponse struct {
	ContentType                                string
	StatusCode                                 int64
	PreviewSyncServiceSyncMapSyncMapPermission *shared.PreviewSyncServiceSyncMapSyncMapPermission
}
