package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamEventsByYearSimplePathParams struct {
	TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
	Year    int64  `pathParam:"style=simple,explode=false,name=year"`
}

type GetTeamEventsByYearSimpleHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetTeamEventsByYearSimpleSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamEventsByYearSimpleRequest struct {
	PathParams GetTeamEventsByYearSimplePathParams
	Headers    GetTeamEventsByYearSimpleHeaders
	Security   GetTeamEventsByYearSimpleSecurity
}

type GetTeamEventsByYearSimpleResponse struct {
	ContentType  string
	EventSimples []shared.EventSimple
	Headers      map[string][]string
	StatusCode   int64
}
