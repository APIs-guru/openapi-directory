package operations

import (
"openapi/pkg/models/shared")
var FetchRecordingTranscriptionServers = []string{
	"https://api.twilio.com",
}

type FetchRecordingTranscriptionPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    RecordingSid string `pathParam:"style=simple,explode=false,name=RecordingSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchRecordingTranscriptionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchRecordingTranscriptionRequest struct {
    ServerURL *string 
    PathParams FetchRecordingTranscriptionPathParams 
    Security FetchRecordingTranscriptionSecurity 
    
}

type FetchRecordingTranscriptionResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountRecordingRecordingTranscription *shared.APIV2010AccountRecordingRecordingTranscription 
    
}

