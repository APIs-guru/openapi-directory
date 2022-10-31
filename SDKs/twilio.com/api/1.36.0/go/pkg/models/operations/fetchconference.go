package operations

import (
"openapi/pkg/models/shared")
var FetchConferenceServers = []string{
	"https://api.twilio.com",
}

type FetchConferencePathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchConferenceSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchConferenceRequest struct {
    ServerURL *string 
    PathParams FetchConferencePathParams 
    Security FetchConferenceSecurity 
    
}

type FetchConferenceResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountConference *shared.APIV2010AccountConference 
    
}

