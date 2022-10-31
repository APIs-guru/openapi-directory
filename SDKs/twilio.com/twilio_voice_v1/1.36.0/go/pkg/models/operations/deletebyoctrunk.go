package operations

import (
"openapi/pkg/models/shared")
var DeleteByocTrunkServers = []string{
	"https://voice.twilio.com",
}

type DeleteByocTrunkPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteByocTrunkSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteByocTrunkRequest struct {
    ServerURL *string 
    PathParams DeleteByocTrunkPathParams 
    Security DeleteByocTrunkSecurity 
    
}

type DeleteByocTrunkResponse struct {
    ContentType string 
    StatusCode int64 
    
}

