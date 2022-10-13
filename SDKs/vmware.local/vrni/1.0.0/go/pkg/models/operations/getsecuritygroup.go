package operations

import (
	"openapi/pkg/models/shared"
)

type GetSecurityGroupPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSecurityGroupQueryParams struct {
	Time *int64 `queryParam:"style=form,explode=true,name=time"`
}

type GetSecurityGroupSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetSecurityGroupRequest struct {
	PathParams  GetSecurityGroupPathParams
	QueryParams GetSecurityGroupQueryParams
	Security    GetSecurityGroupSecurity
}

type GetSecurityGroupResponse struct {
	APIError          *shared.APIError
	BaseSecurityGroup *shared.BaseSecurityGroup
	ContentType       string
	StatusCode        int64
}
