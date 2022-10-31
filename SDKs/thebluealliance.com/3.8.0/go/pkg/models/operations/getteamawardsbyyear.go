package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamAwardsByYearPathParams struct {
	TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
	Year    int64  `pathParam:"style=simple,explode=false,name=year"`
}

type GetTeamAwardsByYearHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetTeamAwardsByYearSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamAwardsByYearRequest struct {
	PathParams GetTeamAwardsByYearPathParams
	Headers    GetTeamAwardsByYearHeaders
	Security   GetTeamAwardsByYearSecurity
}

type GetTeamAwardsByYearResponse struct {
	Awards      []shared.Award
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
