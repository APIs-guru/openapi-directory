package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteEngagementServerList = []string{
	"https://studio.twilio.com",
}

type DeleteEngagementPathParams struct {
	FlowSid string `pathParam:"style=simple,explode=false,name=FlowSid"`
	Sid     string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteEngagementSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteEngagementRequest struct {
	ServerURL  *string
	PathParams DeleteEngagementPathParams
	Security   DeleteEngagementSecurity
}

type DeleteEngagementResponse struct {
	ContentType string
	StatusCode  int64
}
