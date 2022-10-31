package operations

import (
"openapi/pkg/models/shared")
var FetchIPRecordServers = []string{
	"https://voice.twilio.com",
}

type FetchIPRecordPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchIPRecordSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchIPRecordRequest struct {
    ServerURL *string 
    PathParams FetchIPRecordPathParams 
    Security FetchIPRecordSecurity 
    
}

type FetchIPRecordResponse struct {
    ContentType string 
    StatusCode int64 
    VoiceV1IPRecord *shared.VoiceV1IPRecord 
    
}

