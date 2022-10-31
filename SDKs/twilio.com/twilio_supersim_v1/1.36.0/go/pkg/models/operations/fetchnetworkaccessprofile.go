package operations

import (
"openapi/pkg/models/shared")
var FetchNetworkAccessProfileServers = []string{
	"https://supersim.twilio.com",
}

type FetchNetworkAccessProfilePathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchNetworkAccessProfileSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchNetworkAccessProfileRequest struct {
    ServerURL *string 
    PathParams FetchNetworkAccessProfilePathParams 
    Security FetchNetworkAccessProfileSecurity 
    
}

type FetchNetworkAccessProfileResponse struct {
    ContentType string 
    StatusCode int64 
    SupersimV1NetworkAccessProfile *shared.SupersimV1NetworkAccessProfile 
    
}

