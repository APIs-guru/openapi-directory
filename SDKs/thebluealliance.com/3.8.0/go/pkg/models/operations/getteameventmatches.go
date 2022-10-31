package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamEventMatchesPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
	TeamKey  string `pathParam:"style=simple,explode=false,name=team_key"`
}

type GetTeamEventMatchesHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetTeamEventMatchesSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamEventMatchesRequest struct {
	PathParams GetTeamEventMatchesPathParams
	Headers    GetTeamEventMatchesHeaders
	Security   GetTeamEventMatchesSecurity
}

type GetTeamEventMatchesResponse struct {
	ContentType string
	Headers     map[string][]string
	Matches     []shared.Match
	StatusCode  int64
}
