package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteFlowServers = []string{
	"https://studio.twilio.com",
}

type DeleteFlowPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteFlowSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteFlowRequest struct {
	ServerURL  *string
	PathParams DeleteFlowPathParams
	Security   DeleteFlowSecurity
}

type DeleteFlowResponse struct {
	ContentType string
	StatusCode  int64
}
