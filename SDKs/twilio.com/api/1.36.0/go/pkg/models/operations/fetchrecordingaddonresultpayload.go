package operations

import (
"openapi/pkg/models/shared")
var FetchRecordingAddOnResultPayloadServers = []string{
	"https://api.twilio.com",
}

type FetchRecordingAddOnResultPayloadPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    AddOnResultSid string `pathParam:"style=simple,explode=false,name=AddOnResultSid"`
    ReferenceSid string `pathParam:"style=simple,explode=false,name=ReferenceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchRecordingAddOnResultPayloadSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchRecordingAddOnResultPayloadRequest struct {
    ServerURL *string 
    PathParams FetchRecordingAddOnResultPayloadPathParams 
    Security FetchRecordingAddOnResultPayloadSecurity 
    
}

type FetchRecordingAddOnResultPayloadResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload *shared.APIV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload 
    
}

