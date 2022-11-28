package operations

import (
	"openapi/pkg/models/shared"
)

var FetchExecutionStepServerList = []string{
	"https://studio.twilio.com",
}

type FetchExecutionStepPathParams struct {
	ExecutionSid string `pathParam:"style=simple,explode=false,name=ExecutionSid"`
	FlowSid      string `pathParam:"style=simple,explode=false,name=FlowSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchExecutionStepSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchExecutionStepRequest struct {
	ServerURL  *string
	PathParams FetchExecutionStepPathParams
	Security   FetchExecutionStepSecurity
}

type FetchExecutionStepResponse struct {
	ContentType                        string
	StatusCode                         int64
	StudioV1FlowExecutionExecutionStep *shared.StudioV1FlowExecutionExecutionStep
}
