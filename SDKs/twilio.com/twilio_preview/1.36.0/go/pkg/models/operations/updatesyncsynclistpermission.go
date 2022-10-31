package operations

import (
"openapi/pkg/models/shared")
var UpdateSyncSyncListPermissionServers = []string{
	"https://preview.twilio.com",
}

type UpdateSyncSyncListPermissionPathParams struct {
    Identity string `pathParam:"style=simple,explode=false,name=Identity"`
    ListSid string `pathParam:"style=simple,explode=false,name=ListSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest struct {
    Manage bool `form:"name=Manage"`
    Read bool `form:"name=Read"`
    Write bool `form:"name=Write"`
    
}

type UpdateSyncSyncListPermissionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateSyncSyncListPermissionRequest struct {
    ServerURL *string 
    PathParams UpdateSyncSyncListPermissionPathParams 
    Request *UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateSyncSyncListPermissionSecurity 
    
}

type UpdateSyncSyncListPermissionResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewSyncServiceSyncListSyncListPermission *shared.PreviewSyncServiceSyncListSyncListPermission 
    
}

