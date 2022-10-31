package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamEventsSimplePathParams struct {
	TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
}

type GetTeamEventsSimpleHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetTeamEventsSimpleSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamEventsSimpleRequest struct {
	PathParams GetTeamEventsSimplePathParams
	Headers    GetTeamEventsSimpleHeaders
	Security   GetTeamEventsSimpleSecurity
}

type GetTeamEventsSimpleResponse struct {
	ContentType  string
	EventSimples []shared.EventSimple
	Headers      map[string][]string
	StatusCode   int64
}
