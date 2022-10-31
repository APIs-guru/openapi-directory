package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteExecutionServers = []string{
	"https://studio.twilio.com",
}

type DeleteExecutionPathParams struct {
	FlowSid string `pathParam:"style=simple,explode=false,name=FlowSid"`
	Sid     string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteExecutionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteExecutionRequest struct {
	ServerURL  *string
	PathParams DeleteExecutionPathParams
	Security   DeleteExecutionSecurity
}

type DeleteExecutionResponse struct {
	ContentType string
	StatusCode  int64
}
