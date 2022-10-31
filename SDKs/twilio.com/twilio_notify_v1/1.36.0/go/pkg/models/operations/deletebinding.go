package operations

import (
"openapi/pkg/models/shared")
var DeleteBindingServers = []string{
	"https://notify.twilio.com",
}

type DeleteBindingPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteBindingSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteBindingRequest struct {
    ServerURL *string 
    PathParams DeleteBindingPathParams 
    Security DeleteBindingSecurity 
    
}

type DeleteBindingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

