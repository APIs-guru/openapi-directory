package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventRankingsPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventRankingsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetEventRankingsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventRankingsRequest struct {
	PathParams GetEventRankingsPathParams
	Headers    GetEventRankingsHeaders
	Security   GetEventRankingsSecurity
}

type GetEventRankingsResponse struct {
	ContentType  string
	EventRanking *shared.EventRanking
	Headers      map[string][]string
	StatusCode   int64
}
