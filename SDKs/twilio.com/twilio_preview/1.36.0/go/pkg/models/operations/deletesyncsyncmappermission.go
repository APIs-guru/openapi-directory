package operations

import (
"openapi/pkg/models/shared")
var DeleteSyncSyncMapPermissionServers = []string{
	"https://preview.twilio.com",
}

type DeleteSyncSyncMapPermissionPathParams struct {
    Identity string `pathParam:"style=simple,explode=false,name=Identity"`
    MapSid string `pathParam:"style=simple,explode=false,name=MapSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type DeleteSyncSyncMapPermissionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteSyncSyncMapPermissionRequest struct {
    ServerURL *string 
    PathParams DeleteSyncSyncMapPermissionPathParams 
    Security DeleteSyncSyncMapPermissionSecurity 
    
}

type DeleteSyncSyncMapPermissionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

