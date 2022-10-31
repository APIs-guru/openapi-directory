package operations

import (
"openapi/pkg/models/shared")
var FetchMediaProcessorServers = []string{
	"https://media.twilio.com",
}

type FetchMediaProcessorPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchMediaProcessorSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchMediaProcessorRequest struct {
    ServerURL *string 
    PathParams FetchMediaProcessorPathParams 
    Security FetchMediaProcessorSecurity 
    
}

type FetchMediaProcessorResponse struct {
    ContentType string 
    StatusCode int64 
    MediaV1MediaProcessor *shared.MediaV1MediaProcessor 
    
}

