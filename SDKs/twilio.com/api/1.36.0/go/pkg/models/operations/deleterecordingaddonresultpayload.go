package operations

import (
"openapi/pkg/models/shared")
var DeleteRecordingAddOnResultPayloadServers = []string{
	"https://api.twilio.com",
}

type DeleteRecordingAddOnResultPayloadPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    AddOnResultSid string `pathParam:"style=simple,explode=false,name=AddOnResultSid"`
    ReferenceSid string `pathParam:"style=simple,explode=false,name=ReferenceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteRecordingAddOnResultPayloadSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteRecordingAddOnResultPayloadRequest struct {
    ServerURL *string 
    PathParams DeleteRecordingAddOnResultPayloadPathParams 
    Security DeleteRecordingAddOnResultPayloadSecurity 
    
}

type DeleteRecordingAddOnResultPayloadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

