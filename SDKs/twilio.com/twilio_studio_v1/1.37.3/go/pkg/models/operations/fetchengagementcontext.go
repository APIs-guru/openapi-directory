package operations

import (
	"openapi/pkg/models/shared"
)

var FetchEngagementContextServerList = []string{
	"https://studio.twilio.com",
}

type FetchEngagementContextPathParams struct {
	EngagementSid string `pathParam:"style=simple,explode=false,name=EngagementSid"`
	FlowSid       string `pathParam:"style=simple,explode=false,name=FlowSid"`
}

type FetchEngagementContextSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchEngagementContextRequest struct {
	ServerURL  *string
	PathParams FetchEngagementContextPathParams
	Security   FetchEngagementContextSecurity
}

type FetchEngagementContextResponse struct {
	ContentType                             string
	StatusCode                              int64
	StudioV1FlowEngagementEngagementContext *shared.StudioV1FlowEngagementEngagementContext
}
