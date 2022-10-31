package operations

import (
"openapi/pkg/models/shared")
var UpdateConnectionPolicyServers = []string{
	"https://voice.twilio.com",
}

type UpdateConnectionPolicyPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateConnectionPolicyUpdateConnectionPolicyRequest struct {
    FriendlyName *string `form:"name=FriendlyName"`
    
}

type UpdateConnectionPolicySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateConnectionPolicyRequest struct {
    ServerURL *string 
    PathParams UpdateConnectionPolicyPathParams 
    Request *UpdateConnectionPolicyUpdateConnectionPolicyRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateConnectionPolicySecurity 
    
}

type UpdateConnectionPolicyResponse struct {
    ContentType string 
    StatusCode int64 
    VoiceV1ConnectionPolicy *shared.VoiceV1ConnectionPolicy 
    
}

