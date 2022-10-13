package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamMatchesByYearPathParams struct {
	TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
	Year    int64  `pathParam:"style=simple,explode=false,name=year"`
}

type GetTeamMatchesByYearHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetTeamMatchesByYearSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamMatchesByYearRequest struct {
	PathParams GetTeamMatchesByYearPathParams
	Headers    GetTeamMatchesByYearHeaders
	Security   GetTeamMatchesByYearSecurity
}

type GetTeamMatchesByYearResponse struct {
	ContentType string
	Headers     map[string][]string
	Matches     []shared.Match
	StatusCode  int64
}
