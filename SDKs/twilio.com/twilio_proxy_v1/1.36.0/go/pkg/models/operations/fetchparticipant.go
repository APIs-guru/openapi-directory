package operations

import (
"openapi/pkg/models/shared")
var FetchParticipantServers = []string{
	"https://proxy.twilio.com",
}

type FetchParticipantPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    SessionSid string `pathParam:"style=simple,explode=false,name=SessionSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchParticipantSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchParticipantRequest struct {
    ServerURL *string 
    PathParams FetchParticipantPathParams 
    Security FetchParticipantSecurity 
    
}

type FetchParticipantResponse struct {
    ContentType string 
    StatusCode int64 
    ProxyV1ServiceSessionParticipant *shared.ProxyV1ServiceSessionParticipant 
    
}

