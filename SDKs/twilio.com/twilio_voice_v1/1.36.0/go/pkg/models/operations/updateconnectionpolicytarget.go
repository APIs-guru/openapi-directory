package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateConnectionPolicyTargetServers = []string{
	"https://voice.twilio.com",
}

type UpdateConnectionPolicyTargetPathParams struct {
	ConnectionPolicySid string `pathParam:"style=simple,explode=false,name=ConnectionPolicySid"`
	Sid                 string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateConnectionPolicyTargetRequestBodyUpdateConnectionPolicyTargetRequest struct {
	Enabled      *bool   `form:"name=Enabled"`
	FriendlyName *string `form:"name=FriendlyName"`
	Priority     *int64  `form:"name=Priority"`
	Target       *string `form:"name=Target"`
	Weight       *int64  `form:"name=Weight"`
}

type UpdateConnectionPolicyTargetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateConnectionPolicyTargetRequest struct {
	ServerURL  *string
	PathParams UpdateConnectionPolicyTargetPathParams
	Request    *UpdateConnectionPolicyTargetRequestBodyUpdateConnectionPolicyTargetRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateConnectionPolicyTargetSecurity
}

type UpdateConnectionPolicyTargetResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	VoiceV1ConnectionPolicyConnectionPolicyTarget *shared.VoiceV1ConnectionPolicyConnectionPolicyTarget
}
