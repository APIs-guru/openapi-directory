package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCallFeedbackSummaryServers = []string{
	"https://api.twilio.com",
}

type FetchCallFeedbackSummaryPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchCallFeedbackSummarySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCallFeedbackSummaryRequest struct {
	ServerURL  *string
	PathParams FetchCallFeedbackSummaryPathParams
	Security   FetchCallFeedbackSummarySecurity
}

type FetchCallFeedbackSummaryResponse struct {
	ContentType                            string
	StatusCode                             int64
	APIV2010AccountCallCallFeedbackSummary *shared.APIV2010AccountCallCallFeedbackSummary
}
