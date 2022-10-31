package operations

import (
"openapi/pkg/models/shared")
var FetchSyncListServers = []string{
	"https://sync.twilio.com",
}

type FetchSyncListPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchSyncListSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSyncListRequest struct {
    ServerURL *string 
    PathParams FetchSyncListPathParams 
    Security FetchSyncListSecurity 
    
}

type FetchSyncListResponse struct {
    ContentType string 
    StatusCode int64 
    SyncV1ServiceSyncList *shared.SyncV1ServiceSyncList 
    
}

