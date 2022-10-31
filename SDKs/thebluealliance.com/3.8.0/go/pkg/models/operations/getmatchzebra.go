package operations

import (
	"openapi/pkg/models/shared"
)

type GetMatchZebraPathParams struct {
	MatchKey string `pathParam:"style=simple,explode=false,name=match_key"`
}

type GetMatchZebraHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetMatchZebraSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetMatchZebraRequest struct {
	PathParams GetMatchZebraPathParams
	Headers    GetMatchZebraHeaders
	Security   GetMatchZebraSecurity
}

type GetMatchZebraResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Zebra       *shared.Zebra
}
