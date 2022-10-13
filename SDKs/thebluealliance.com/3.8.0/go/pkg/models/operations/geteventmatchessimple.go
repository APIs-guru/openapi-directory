package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventMatchesSimplePathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventMatchesSimpleHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetEventMatchesSimpleSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventMatchesSimpleRequest struct {
	PathParams GetEventMatchesSimplePathParams
	Headers    GetEventMatchesSimpleHeaders
	Security   GetEventMatchesSimpleSecurity
}

type GetEventMatchesSimpleResponse struct {
	ContentType  string
	Headers      map[string][]string
	MatchSimples []shared.MatchSimple
	StatusCode   int64
}
