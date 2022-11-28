package operations

import (
	"openapi/pkg/models/shared"
)

var FetchEngagementServerList = []string{
	"https://studio.twilio.com",
}

type FetchEngagementPathParams struct {
	FlowSid string `pathParam:"style=simple,explode=false,name=FlowSid"`
	Sid     string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchEngagementSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchEngagementRequest struct {
	ServerURL  *string
	PathParams FetchEngagementPathParams
	Security   FetchEngagementSecurity
}

type FetchEngagementResponse struct {
	ContentType            string
	StatusCode             int64
	StudioV1FlowEngagement *shared.StudioV1FlowEngagement
}
