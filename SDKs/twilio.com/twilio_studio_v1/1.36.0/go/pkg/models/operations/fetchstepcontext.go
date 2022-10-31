package operations

import (
	"openapi/pkg/models/shared"
)

var FetchStepContextServers = []string{
	"https://studio.twilio.com",
}

type FetchStepContextPathParams struct {
	EngagementSid string `pathParam:"style=simple,explode=false,name=EngagementSid"`
	FlowSid       string `pathParam:"style=simple,explode=false,name=FlowSid"`
	StepSid       string `pathParam:"style=simple,explode=false,name=StepSid"`
}

type FetchStepContextSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchStepContextRequest struct {
	ServerURL  *string
	PathParams FetchStepContextPathParams
	Security   FetchStepContextSecurity
}

type FetchStepContextResponse struct {
	ContentType                           string
	StatusCode                            int64
	StudioV1FlowEngagementStepStepContext *shared.StudioV1FlowEngagementStepStepContext
}
