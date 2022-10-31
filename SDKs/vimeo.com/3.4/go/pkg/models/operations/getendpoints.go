package operations

import (
	"openapi/pkg/models/shared"
)

type GetEndpointsQueryParams struct {
	Openapi *bool `queryParam:"style=form,explode=true,name=openapi"`
}

type GetEndpointsRequest struct {
	QueryParams GetEndpointsQueryParams
}

type GetEndpointsResponse struct {
	ContentType string
	StatusCode  int64
	Endpoint    *shared.Endpoint
}
