package operations

import (
"openapi/pkg/models/shared")
var FetchSyncMapServers = []string{
	"https://sync.twilio.com",
}

type FetchSyncMapPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchSyncMapSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSyncMapRequest struct {
    ServerURL *string 
    PathParams FetchSyncMapPathParams 
    Security FetchSyncMapSecurity 
    
}

type FetchSyncMapResponse struct {
    ContentType string 
    StatusCode int64 
    SyncV1ServiceSyncMap *shared.SyncV1ServiceSyncMap 
    
}

