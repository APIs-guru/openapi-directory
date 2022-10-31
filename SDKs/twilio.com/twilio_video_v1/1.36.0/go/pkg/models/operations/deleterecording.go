package operations

import (
"openapi/pkg/models/shared")
var DeleteRecordingServers = []string{
	"https://video.twilio.com",
}

type DeleteRecordingPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteRecordingSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteRecordingRequest struct {
    ServerURL *string 
    PathParams DeleteRecordingPathParams 
    Security DeleteRecordingSecurity 
    
}

type DeleteRecordingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

