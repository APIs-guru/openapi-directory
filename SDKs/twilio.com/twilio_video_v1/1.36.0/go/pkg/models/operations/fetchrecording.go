package operations

import (
"openapi/pkg/models/shared")
var FetchRecordingServers = []string{
	"https://video.twilio.com",
}

type FetchRecordingPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchRecordingSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchRecordingRequest struct {
    ServerURL *string 
    PathParams FetchRecordingPathParams 
    Security FetchRecordingSecurity 
    
}

type FetchRecordingResponse struct {
    ContentType string 
    StatusCode int64 
    VideoV1Recording *shared.VideoV1Recording 
    
}

