package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceGroupPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetServiceGroupQueryParams struct {
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetServiceGroupSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetServiceGroupRequest struct {
	PathParams  GetServiceGroupPathParams
	QueryParams GetServiceGroupQueryParams
	Security    GetServiceGroupSecurity
}

type GetServiceGroupResponse struct {
	APIError    *shared.APIError
	ContentType string
	Group       *shared.Group
	StatusCode  int64
}
