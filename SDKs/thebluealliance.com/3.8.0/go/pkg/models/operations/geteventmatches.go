package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventMatchesPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventMatchesHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetEventMatchesSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventMatchesRequest struct {
	PathParams GetEventMatchesPathParams
	Headers    GetEventMatchesHeaders
	Security   GetEventMatchesSecurity
}

type GetEventMatchesResponse struct {
	ContentType string
	Headers     map[string][]string
	Matches     []shared.Match
	StatusCode  int64
}
