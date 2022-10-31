package operations

import (
"openapi/pkg/models/shared")
var DeleteCallRecordingServers = []string{
	"https://api.twilio.com",
}

type DeleteCallRecordingPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    CallSid string `pathParam:"style=simple,explode=false,name=CallSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteCallRecordingSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteCallRecordingRequest struct {
    ServerURL *string 
    PathParams DeleteCallRecordingPathParams 
    Security DeleteCallRecordingSecurity 
    
}

type DeleteCallRecordingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

