package operations

import (
"openapi/pkg/models/shared")
var FetchNetworkServers = []string{
	"https://supersim.twilio.com",
}

type FetchNetworkPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchNetworkSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchNetworkRequest struct {
    ServerURL *string 
    PathParams FetchNetworkPathParams 
    Security FetchNetworkSecurity 
    
}

type FetchNetworkResponse struct {
    ContentType string 
    StatusCode int64 
    SupersimV1Network *shared.SupersimV1Network 
    
}

