package operations

import (
"openapi/pkg/models/shared")
var CreateConnectionPolicyTargetServers = []string{
	"https://voice.twilio.com",
}

type CreateConnectionPolicyTargetPathParams struct {
    ConnectionPolicySid string `pathParam:"style=simple,explode=false,name=ConnectionPolicySid"`
    
}

type CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest struct {
    Enabled *bool `form:"name=Enabled"`
    FriendlyName *string `form:"name=FriendlyName"`
    Priority *int64 `form:"name=Priority"`
    Target string `form:"name=Target"`
    Weight *int64 `form:"name=Weight"`
    
}

type CreateConnectionPolicyTargetSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateConnectionPolicyTargetRequest struct {
    ServerURL *string 
    PathParams CreateConnectionPolicyTargetPathParams 
    Request *CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateConnectionPolicyTargetSecurity 
    
}

type CreateConnectionPolicyTargetResponse struct {
    ContentType string 
    StatusCode int64 
    VoiceV1ConnectionPolicyConnectionPolicyTarget *shared.VoiceV1ConnectionPolicyConnectionPolicyTarget 
    
}

