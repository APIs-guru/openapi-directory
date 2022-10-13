package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamMediaByTagYearPathParams struct {
	MediaTag string `pathParam:"style=simple,explode=false,name=media_tag"`
	TeamKey  string `pathParam:"style=simple,explode=false,name=team_key"`
	Year     int64  `pathParam:"style=simple,explode=false,name=year"`
}

type GetTeamMediaByTagYearHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetTeamMediaByTagYearSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamMediaByTagYearRequest struct {
	PathParams GetTeamMediaByTagYearPathParams
	Headers    GetTeamMediaByTagYearHeaders
	Security   GetTeamMediaByTagYearSecurity
}

type GetTeamMediaByTagYearResponse struct {
	ContentType string
	Headers     map[string][]string
	Media       []shared.Media
	StatusCode  int64
}
