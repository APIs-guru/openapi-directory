package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventTeamsSimplePathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventTeamsSimpleHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetEventTeamsSimpleSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventTeamsSimpleRequest struct {
	PathParams GetEventTeamsSimplePathParams
	Headers    GetEventTeamsSimpleHeaders
	Security   GetEventTeamsSimpleSecurity
}

type GetEventTeamsSimpleResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	TeamSimples []shared.TeamSimple
}
