package operations

import (
"openapi/pkg/models/shared")
var CreateConnectionPolicyServers = []string{
	"https://voice.twilio.com",
}

type CreateConnectionPolicyCreateConnectionPolicyRequest struct {
    FriendlyName *string `form:"name=FriendlyName"`
    
}

type CreateConnectionPolicySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateConnectionPolicyRequest struct {
    ServerURL *string 
    Request *CreateConnectionPolicyCreateConnectionPolicyRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateConnectionPolicySecurity 
    
}

type CreateConnectionPolicyResponse struct {
    ContentType string 
    StatusCode int64 
    VoiceV1ConnectionPolicy *shared.VoiceV1ConnectionPolicy 
    
}

