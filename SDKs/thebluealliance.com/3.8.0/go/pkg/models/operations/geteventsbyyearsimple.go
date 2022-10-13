package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventsByYearSimplePathParams struct {
	Year int64 `pathParam:"style=simple,explode=false,name=year"`
}

type GetEventsByYearSimpleHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetEventsByYearSimpleSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventsByYearSimpleRequest struct {
	PathParams GetEventsByYearSimplePathParams
	Headers    GetEventsByYearSimpleHeaders
	Security   GetEventsByYearSimpleSecurity
}

type GetEventsByYearSimpleResponse struct {
	ContentType  string
	EventSimples []shared.EventSimple
	Headers      map[string][]string
	StatusCode   int64
}
