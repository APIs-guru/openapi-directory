package operations

import (
"openapi/pkg/models/shared")
var FetchConnectionPolicyTargetServers = []string{
	"https://voice.twilio.com",
}

type FetchConnectionPolicyTargetPathParams struct {
    ConnectionPolicySid string `pathParam:"style=simple,explode=false,name=ConnectionPolicySid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchConnectionPolicyTargetSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchConnectionPolicyTargetRequest struct {
    ServerURL *string 
    PathParams FetchConnectionPolicyTargetPathParams 
    Security FetchConnectionPolicyTargetSecurity 
    
}

type FetchConnectionPolicyTargetResponse struct {
    ContentType string 
    StatusCode int64 
    VoiceV1ConnectionPolicyConnectionPolicyTarget *shared.VoiceV1ConnectionPolicyConnectionPolicyTarget 
    
}

