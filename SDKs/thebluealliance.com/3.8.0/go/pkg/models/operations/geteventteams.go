package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventTeamsPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventTeamsHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetEventTeamsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventTeamsRequest struct {
	PathParams GetEventTeamsPathParams
	Headers    GetEventTeamsHeaders
	Security   GetEventTeamsSecurity
}

type GetEventTeamsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Teams       []shared.Team
}
