package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1LocationsLocationPathParams struct {
	Location string `pathParam:"style=simple,explode=false,name=location"`
}

type GetAPIV1LocationsLocationQueryParams struct {
	PlanID *string `queryParam:"style=form,explode=true,name=planId"`
}

type GetAPIV1LocationsLocationRequest struct {
	PathParams  GetAPIV1LocationsLocationPathParams
	QueryParams GetAPIV1LocationsLocationQueryParams
}

type GetAPIV1LocationsLocationResponse struct {
	Body               []byte
	ContentType        string
	LocationInfoResult *shared.LocationInfoResult
	ProblemDetails     map[string]interface{}
	StatusCode         int64
}
