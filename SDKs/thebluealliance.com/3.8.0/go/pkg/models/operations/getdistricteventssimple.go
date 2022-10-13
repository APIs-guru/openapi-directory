package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistrictEventsSimplePathParams struct {
	DistrictKey string `pathParam:"style=simple,explode=false,name=district_key"`
}

type GetDistrictEventsSimpleHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetDistrictEventsSimpleSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetDistrictEventsSimpleRequest struct {
	PathParams GetDistrictEventsSimplePathParams
	Headers    GetDistrictEventsSimpleHeaders
	Security   GetDistrictEventsSimpleSecurity
}

type GetDistrictEventsSimpleResponse struct {
	ContentType  string
	EventSimples []shared.EventSimple
	Headers      map[string][]string
	StatusCode   int64
}
