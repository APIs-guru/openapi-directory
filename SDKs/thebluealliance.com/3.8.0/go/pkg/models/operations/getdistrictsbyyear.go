package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistrictsByYearPathParams struct {
	Year int64 `pathParam:"style=simple,explode=false,name=year"`
}

type GetDistrictsByYearHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetDistrictsByYearSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetDistrictsByYearRequest struct {
	PathParams GetDistrictsByYearPathParams
	Headers    GetDistrictsByYearHeaders
	Security   GetDistrictsByYearSecurity
}

type GetDistrictsByYearResponse struct {
	ContentType   string
	DistrictLists []shared.DistrictList
	Headers       map[string][]string
	StatusCode    int64
}
