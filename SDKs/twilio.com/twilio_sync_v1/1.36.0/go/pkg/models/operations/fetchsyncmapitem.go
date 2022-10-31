package operations

import (
"openapi/pkg/models/shared")
var FetchSyncMapItemServers = []string{
	"https://sync.twilio.com",
}

type FetchSyncMapItemPathParams struct {
    Key string `pathParam:"style=simple,explode=false,name=Key"`
    MapSid string `pathParam:"style=simple,explode=false,name=MapSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type FetchSyncMapItemSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSyncMapItemRequest struct {
    ServerURL *string 
    PathParams FetchSyncMapItemPathParams 
    Security FetchSyncMapItemSecurity 
    
}

type FetchSyncMapItemResponse struct {
    ContentType string 
    StatusCode int64 
    SyncV1ServiceSyncMapSyncMapItem *shared.SyncV1ServiceSyncMapSyncMapItem 
    
}

