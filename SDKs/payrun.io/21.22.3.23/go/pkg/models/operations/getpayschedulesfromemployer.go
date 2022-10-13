package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaySchedulesFromEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetPaySchedulesFromEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetPaySchedulesFromEmployerRequest struct {
	PathParams GetPaySchedulesFromEmployerPathParams
	Headers    GetPaySchedulesFromEmployerHeaders
}

type GetPaySchedulesFromEmployerResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
