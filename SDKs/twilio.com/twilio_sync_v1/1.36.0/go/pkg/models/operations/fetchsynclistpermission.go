package operations

import (
"openapi/pkg/models/shared")
var FetchSyncListPermissionServers = []string{
	"https://sync.twilio.com",
}

type FetchSyncListPermissionPathParams struct {
    Identity string `pathParam:"style=simple,explode=false,name=Identity"`
    ListSid string `pathParam:"style=simple,explode=false,name=ListSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type FetchSyncListPermissionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSyncListPermissionRequest struct {
    ServerURL *string 
    PathParams FetchSyncListPermissionPathParams 
    Security FetchSyncListPermissionSecurity 
    
}

type FetchSyncListPermissionResponse struct {
    ContentType string 
    StatusCode int64 
    SyncV1ServiceSyncListSyncListPermission *shared.SyncV1ServiceSyncListSyncListPermission 
    
}

