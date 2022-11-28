package operations

import (
	"openapi/pkg/models/shared"
)

var FetchStepServerList = []string{
	"https://studio.twilio.com",
}

type FetchStepPathParams struct {
	EngagementSid string `pathParam:"style=simple,explode=false,name=EngagementSid"`
	FlowSid       string `pathParam:"style=simple,explode=false,name=FlowSid"`
	Sid           string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchStepSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchStepRequest struct {
	ServerURL  *string
	PathParams FetchStepPathParams
	Security   FetchStepSecurity
}

type FetchStepResponse struct {
	ContentType                string
	StatusCode                 int64
	StudioV1FlowEngagementStep *shared.StudioV1FlowEngagementStep
}
