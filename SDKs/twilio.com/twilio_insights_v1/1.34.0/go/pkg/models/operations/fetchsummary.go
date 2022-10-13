package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSummaryServers = []string{
	"https://insights.twilio.com",
}

type FetchSummaryPathParams struct {
	CallSid string `pathParam:"style=simple,explode=false,name=CallSid"`
}

type FetchSummaryQueryParams struct {
	ProcessingState *shared.SummaryEnumProcessingStateEnum `queryParam:"style=form,explode=true,name=ProcessingState"`
}

type FetchSummarySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSummaryRequest struct {
	ServerURL   *string
	PathParams  FetchSummaryPathParams
	QueryParams FetchSummaryQueryParams
	Security    FetchSummarySecurity
}

type FetchSummaryResponse struct {
	ContentType           string
	StatusCode            int64
	InsightsV1CallSummary *shared.InsightsV1CallSummary
}
