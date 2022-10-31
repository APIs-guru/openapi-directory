package operations

import (
"openapi/pkg/models/shared")
var FetchSyncSyncListPermissionServers = []string{
	"https://preview.twilio.com",
}

type FetchSyncSyncListPermissionPathParams struct {
    Identity string `pathParam:"style=simple,explode=false,name=Identity"`
    ListSid string `pathParam:"style=simple,explode=false,name=ListSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type FetchSyncSyncListPermissionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSyncSyncListPermissionRequest struct {
    ServerURL *string 
    PathParams FetchSyncSyncListPermissionPathParams 
    Security FetchSyncSyncListPermissionSecurity 
    
}

type FetchSyncSyncListPermissionResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewSyncServiceSyncListSyncListPermission *shared.PreviewSyncServiceSyncListSyncListPermission 
    
}

