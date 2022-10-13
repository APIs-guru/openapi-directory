package operations

import (
	"openapi/pkg/models/shared"
)

type GetVcenterPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetVcenterSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetVcenterRequest struct {
	PathParams GetVcenterPathParams
	Security   GetVcenterSecurity
}

type GetVcenterResponse struct {
	ContentType       string
	StatusCode        int64
	VCenterDataSource *shared.VCenterDataSource
}
