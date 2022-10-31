package operations

import (
"openapi/pkg/models/shared")
var DeleteRecordingTranscriptionServers = []string{
	"https://api.twilio.com",
}

type DeleteRecordingTranscriptionPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    RecordingSid string `pathParam:"style=simple,explode=false,name=RecordingSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteRecordingTranscriptionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteRecordingTranscriptionRequest struct {
    ServerURL *string 
    PathParams DeleteRecordingTranscriptionPathParams 
    Security DeleteRecordingTranscriptionSecurity 
    
}

type DeleteRecordingTranscriptionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

