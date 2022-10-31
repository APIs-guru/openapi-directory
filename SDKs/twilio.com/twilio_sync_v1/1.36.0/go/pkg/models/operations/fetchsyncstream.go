package operations

import (
"openapi/pkg/models/shared")
var FetchSyncStreamServers = []string{
	"https://sync.twilio.com",
}

type FetchSyncStreamPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchSyncStreamSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSyncStreamRequest struct {
    ServerURL *string 
    PathParams FetchSyncStreamPathParams 
    Security FetchSyncStreamSecurity 
    
}

type FetchSyncStreamResponse struct {
    ContentType string 
    StatusCode int64 
    SyncV1ServiceSyncStream *shared.SyncV1ServiceSyncStream 
    
}

