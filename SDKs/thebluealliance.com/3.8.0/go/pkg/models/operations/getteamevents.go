package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamEventsPathParams struct {
	TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
}

type GetTeamEventsHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetTeamEventsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamEventsRequest struct {
	PathParams GetTeamEventsPathParams
	Headers    GetTeamEventsHeaders
	Security   GetTeamEventsSecurity
}

type GetTeamEventsResponse struct {
	ContentType string
	Events      []shared.Event
	Headers     map[string][]string
	StatusCode  int64
}
