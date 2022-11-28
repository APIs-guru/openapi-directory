package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteCallFeedbackSummaryServerList = []string{
	"https://api.twilio.com",
}

type DeleteCallFeedbackSummaryPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteCallFeedbackSummarySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteCallFeedbackSummaryRequest struct {
	ServerURL  *string
	PathParams DeleteCallFeedbackSummaryPathParams
	Security   DeleteCallFeedbackSummarySecurity
}

type DeleteCallFeedbackSummaryResponse struct {
	ContentType string
	StatusCode  int64
}
