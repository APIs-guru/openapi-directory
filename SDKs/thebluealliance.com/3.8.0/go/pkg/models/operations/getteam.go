package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamPathParams struct {
	TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
}

type GetTeamHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetTeamSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamRequest struct {
	PathParams GetTeamPathParams
	Headers    GetTeamHeaders
	Security   GetTeamSecurity
}

type GetTeamResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Team        *shared.Team
}
