package operations

import (
"openapi/pkg/models/shared")
var UpdateSyncStreamServers = []string{
	"https://sync.twilio.com",
}

type UpdateSyncStreamPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateSyncStreamUpdateSyncStreamRequest struct {
    TTL *int64 `form:"name=Ttl"`
    
}

type UpdateSyncStreamSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateSyncStreamRequest struct {
    ServerURL *string 
    PathParams UpdateSyncStreamPathParams 
    Request *UpdateSyncStreamUpdateSyncStreamRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateSyncStreamSecurity 
    
}

type UpdateSyncStreamResponse struct {
    ContentType string 
    StatusCode int64 
    SyncV1ServiceSyncStream *shared.SyncV1ServiceSyncStream 
    
}

