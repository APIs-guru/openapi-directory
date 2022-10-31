package operations

import (
"openapi/pkg/models/shared")
var DeleteConferenceRecordingServers = []string{
	"https://api.twilio.com",
}

type DeleteConferenceRecordingPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    ConferenceSid string `pathParam:"style=simple,explode=false,name=ConferenceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteConferenceRecordingSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteConferenceRecordingRequest struct {
    ServerURL *string 
    PathParams DeleteConferenceRecordingPathParams 
    Security DeleteConferenceRecordingSecurity 
    
}

type DeleteConferenceRecordingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

