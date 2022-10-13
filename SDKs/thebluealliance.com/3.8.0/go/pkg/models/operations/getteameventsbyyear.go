package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamEventsByYearPathParams struct {
	TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
	Year    int64  `pathParam:"style=simple,explode=false,name=year"`
}

type GetTeamEventsByYearHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetTeamEventsByYearSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamEventsByYearRequest struct {
	PathParams GetTeamEventsByYearPathParams
	Headers    GetTeamEventsByYearHeaders
	Security   GetTeamEventsByYearSecurity
}

type GetTeamEventsByYearResponse struct {
	ContentType string
	Events      []shared.Event
	Headers     map[string][]string
	StatusCode  int64
}
