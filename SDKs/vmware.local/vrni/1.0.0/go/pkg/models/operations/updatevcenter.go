package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVcenterPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateVcenterSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateVcenterRequest struct {
	PathParams UpdateVcenterPathParams
	Request    *shared.VCenterDataSource `request:"mediaType=application/json"`
	Security   UpdateVcenterSecurity
}

type UpdateVcenterResponse struct {
	APIError          *shared.APIError
	ContentType       string
	StatusCode        int64
	VCenterDataSource *shared.VCenterDataSource
}
