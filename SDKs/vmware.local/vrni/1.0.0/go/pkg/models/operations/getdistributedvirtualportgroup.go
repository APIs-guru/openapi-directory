package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistributedVirtualPortgroupPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetDistributedVirtualPortgroupQueryParams struct {
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetDistributedVirtualPortgroupSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetDistributedVirtualPortgroupRequest struct {
	PathParams  GetDistributedVirtualPortgroupPathParams
	QueryParams GetDistributedVirtualPortgroupQueryParams
	Security    GetDistributedVirtualPortgroupSecurity
}

type GetDistributedVirtualPortgroupResponse struct {
	APIError                    *shared.APIError
	ContentType                 string
	DistributedVirtualPortgroup *shared.DistributedVirtualPortgroup
	StatusCode                  int64
}
