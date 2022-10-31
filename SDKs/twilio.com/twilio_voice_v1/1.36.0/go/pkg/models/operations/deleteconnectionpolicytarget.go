package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteConnectionPolicyTargetServers = []string{
	"https://voice.twilio.com",
}

type DeleteConnectionPolicyTargetPathParams struct {
	ConnectionPolicySid string `pathParam:"style=simple,explode=false,name=ConnectionPolicySid"`
	Sid                 string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteConnectionPolicyTargetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteConnectionPolicyTargetRequest struct {
	ServerURL  *string
	PathParams DeleteConnectionPolicyTargetPathParams
	Security   DeleteConnectionPolicyTargetSecurity
}

type DeleteConnectionPolicyTargetResponse struct {
	ContentType string
	StatusCode  int64
}
