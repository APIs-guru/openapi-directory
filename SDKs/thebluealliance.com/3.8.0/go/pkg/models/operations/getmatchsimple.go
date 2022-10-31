package operations

import (
	"openapi/pkg/models/shared"
)

type GetMatchSimplePathParams struct {
	MatchKey string `pathParam:"style=simple,explode=false,name=match_key"`
}

type GetMatchSimpleHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetMatchSimpleSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetMatchSimpleRequest struct {
	PathParams GetMatchSimplePathParams
	Headers    GetMatchSimpleHeaders
	Security   GetMatchSimpleSecurity
}

type GetMatchSimpleResponse struct {
	ContentType string
	Headers     map[string][]string
	MatchSimple *shared.MatchSimple
	StatusCode  int64
}
