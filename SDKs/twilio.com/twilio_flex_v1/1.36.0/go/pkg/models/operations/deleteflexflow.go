package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteFlexFlowServers = []string{
	"https://flex-api.twilio.com",
}

type DeleteFlexFlowPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteFlexFlowSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteFlexFlowRequest struct {
	ServerURL  *string
	PathParams DeleteFlexFlowPathParams
	Security   DeleteFlexFlowSecurity
}

type DeleteFlexFlowResponse struct {
	ContentType string
	StatusCode  int64
}
