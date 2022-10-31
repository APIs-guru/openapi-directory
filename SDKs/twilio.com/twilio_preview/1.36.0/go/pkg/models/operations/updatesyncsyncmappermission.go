package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSyncSyncMapPermissionServers = []string{
	"https://preview.twilio.com",
}

type UpdateSyncSyncMapPermissionPathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	MapSid     string `pathParam:"style=simple,explode=false,name=MapSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest struct {
	Manage bool `form:"name=Manage"`
	Read   bool `form:"name=Read"`
	Write  bool `form:"name=Write"`
}

type UpdateSyncSyncMapPermissionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSyncSyncMapPermissionRequest struct {
	ServerURL  *string
	PathParams UpdateSyncSyncMapPermissionPathParams
	Request    *UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSyncSyncMapPermissionSecurity
}

type UpdateSyncSyncMapPermissionResponse struct {
	ContentType                                string
	StatusCode                                 int64
	PreviewSyncServiceSyncMapSyncMapPermission *shared.PreviewSyncServiceSyncMapSyncMapPermission
}
