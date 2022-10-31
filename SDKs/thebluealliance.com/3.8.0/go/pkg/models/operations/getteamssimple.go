package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsSimplePathParams struct {
	PageNum int64 `pathParam:"style=simple,explode=false,name=page_num"`
}

type GetTeamsSimpleHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetTeamsSimpleSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsSimpleRequest struct {
	PathParams GetTeamsSimplePathParams
	Headers    GetTeamsSimpleHeaders
	Security   GetTeamsSimpleSecurity
}

type GetTeamsSimpleResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	TeamSimples []shared.TeamSimple
}
