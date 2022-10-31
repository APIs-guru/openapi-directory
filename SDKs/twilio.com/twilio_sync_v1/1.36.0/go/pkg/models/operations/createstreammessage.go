package operations

import (
"openapi/pkg/models/shared")
var CreateStreamMessageServers = []string{
	"https://sync.twilio.com",
}

type CreateStreamMessagePathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    StreamSid string `pathParam:"style=simple,explode=false,name=StreamSid"`
    
}

type CreateStreamMessageCreateStreamMessageRequest struct {
    Data interface{} `form:"name=Data"`
    
}

type CreateStreamMessageSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateStreamMessageRequest struct {
    ServerURL *string 
    PathParams CreateStreamMessagePathParams 
    Request *CreateStreamMessageCreateStreamMessageRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateStreamMessageSecurity 
    
}

type CreateStreamMessageResponse struct {
    ContentType string 
    StatusCode int64 
    SyncV1ServiceSyncStreamStreamMessage *shared.SyncV1ServiceSyncStreamStreamMessage 
    
}

