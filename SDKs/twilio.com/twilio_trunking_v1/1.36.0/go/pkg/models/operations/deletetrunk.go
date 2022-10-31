package operations

import (
"openapi/pkg/models/shared")
var DeleteTrunkServers = []string{
	"https://trunking.twilio.com",
}

type DeleteTrunkPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteTrunkSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteTrunkRequest struct {
    ServerURL *string 
    PathParams DeleteTrunkPathParams 
    Security DeleteTrunkSecurity 
    
}

type DeleteTrunkResponse struct {
    ContentType string 
    StatusCode int64 
    
}

