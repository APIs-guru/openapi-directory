package operations

import (
"openapi/pkg/models/shared")
var FetchConnectionPolicyServers = []string{
	"https://voice.twilio.com",
}

type FetchConnectionPolicyPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchConnectionPolicySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchConnectionPolicyRequest struct {
    ServerURL *string 
    PathParams FetchConnectionPolicyPathParams 
    Security FetchConnectionPolicySecurity 
    
}

type FetchConnectionPolicyResponse struct {
    ContentType string 
    StatusCode int64 
    VoiceV1ConnectionPolicy *shared.VoiceV1ConnectionPolicy 
    
}

