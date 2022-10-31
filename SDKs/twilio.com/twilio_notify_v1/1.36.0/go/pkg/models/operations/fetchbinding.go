package operations

import (
"openapi/pkg/models/shared")
var FetchBindingServers = []string{
	"https://notify.twilio.com",
}

type FetchBindingPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchBindingSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchBindingRequest struct {
    ServerURL *string 
    PathParams FetchBindingPathParams 
    Security FetchBindingSecurity 
    
}

type FetchBindingResponse struct {
    ContentType string 
    StatusCode int64 
    NotifyV1ServiceBinding *shared.NotifyV1ServiceBinding 
    
}

