package operations

import (
"openapi/pkg/models/shared")
var FetchSinkServers = []string{
	"https://events.twilio.com",
}

type FetchSinkPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchSinkSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSinkRequest struct {
    ServerURL *string 
    PathParams FetchSinkPathParams 
    Security FetchSinkSecurity 
    
}

type FetchSinkResponse struct {
    ContentType string 
    StatusCode int64 
    EventsV1Sink *shared.EventsV1Sink 
    
}

