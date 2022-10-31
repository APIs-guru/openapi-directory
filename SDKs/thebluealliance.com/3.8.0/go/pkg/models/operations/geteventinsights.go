package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventInsightsPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventInsightsHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetEventInsightsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventInsightsRequest struct {
	PathParams GetEventInsightsPathParams
	Headers    GetEventInsightsHeaders
	Security   GetEventInsightsSecurity
}

type GetEventInsightsResponse struct {
	ContentType   string
	EventInsights *shared.EventInsights
	Headers       map[string][]string
	StatusCode    int64
}
