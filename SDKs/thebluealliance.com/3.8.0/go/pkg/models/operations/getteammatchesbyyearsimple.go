package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamMatchesByYearSimplePathParams struct {
	TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
	Year    int64  `pathParam:"style=simple,explode=false,name=year"`
}

type GetTeamMatchesByYearSimpleHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetTeamMatchesByYearSimpleSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamMatchesByYearSimpleRequest struct {
	PathParams GetTeamMatchesByYearSimplePathParams
	Headers    GetTeamMatchesByYearSimpleHeaders
	Security   GetTeamMatchesByYearSimpleSecurity
}

type GetTeamMatchesByYearSimpleResponse struct {
	ContentType  string
	Headers      map[string][]string
	MatchSimples []shared.MatchSimple
	StatusCode   int64
}
