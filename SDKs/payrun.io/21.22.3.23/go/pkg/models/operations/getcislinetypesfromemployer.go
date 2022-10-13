package operations

import (
	"openapi/pkg/models/shared"
)

type GetCisLineTypesFromEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetCisLineTypesFromEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetCisLineTypesFromEmployerRequest struct {
	PathParams GetCisLineTypesFromEmployerPathParams
	Headers    GetCisLineTypesFromEmployerHeaders
}

type GetCisLineTypesFromEmployerResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
