package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSyncMapPermissionServerList = []string{
	"https://sync.twilio.com",
}

type UpdateSyncMapPermissionPathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type UpdateSyncMapPermissionUpdateSyncMapPermissionRequest struct {
	Manage bool `form:"name=Manage"`
	Read   bool `form:"name=Read"`
	Write  bool `form:"name=Write"`
}

type UpdateSyncMapPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSyncMapPermissionRequest struct {
	ServerURL  *string
	PathParams UpdateSyncMapPermissionPathParams
	Request    *UpdateSyncMapPermissionUpdateSyncMapPermissionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSyncMapPermissionSecurity
}

type UpdateSyncMapPermissionResponse struct {
	ContentType                           string
	StatusCode                            int64
	SyncV1ServiceSyncMapSyncMapPermission *shared.SyncV1ServiceSyncMapSyncMapPermission
}
