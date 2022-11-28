package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteConnectionPolicyServerList = []string{
	"https://voice.twilio.com",
}

type DeleteConnectionPolicyPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteConnectionPolicySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteConnectionPolicyRequest struct {
	ServerURL  *string
	PathParams DeleteConnectionPolicyPathParams
	Security   DeleteConnectionPolicySecurity
}

type DeleteConnectionPolicyResponse struct {
	ContentType string
	StatusCode  int64
}
