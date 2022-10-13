package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistrictTeamsSimplePathParams struct {
	DistrictKey string `pathParam:"style=simple,explode=false,name=district_key"`
}

type GetDistrictTeamsSimpleHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetDistrictTeamsSimpleSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetDistrictTeamsSimpleRequest struct {
	PathParams GetDistrictTeamsSimplePathParams
	Headers    GetDistrictTeamsSimpleHeaders
	Security   GetDistrictTeamsSimpleSecurity
}

type GetDistrictTeamsSimpleResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	TeamSimples []shared.TeamSimple
}
