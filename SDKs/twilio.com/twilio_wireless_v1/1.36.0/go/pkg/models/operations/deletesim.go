package operations

import (
"openapi/pkg/models/shared")
var DeleteSimServers = []string{
	"https://wireless.twilio.com",
}

type DeleteSimPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteSimSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteSimRequest struct {
    ServerURL *string 
    PathParams DeleteSimPathParams 
    Security DeleteSimSecurity 
    
}

type DeleteSimResponse struct {
    ContentType string 
    StatusCode int64 
    
}

