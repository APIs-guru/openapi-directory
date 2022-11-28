package operations

import (
	"openapi/pkg/models/shared"
)

var FetchExecutionServerList = []string{
	"https://studio.twilio.com",
}

type FetchExecutionPathParams struct {
	FlowSid string `pathParam:"style=simple,explode=false,name=FlowSid"`
	Sid     string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchExecutionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchExecutionRequest struct {
	ServerURL  *string
	PathParams FetchExecutionPathParams
	Security   FetchExecutionSecurity
}

type FetchExecutionResponse struct {
	ContentType           string
	StatusCode            int64
	StudioV2FlowExecution *shared.StudioV2FlowExecution
}
