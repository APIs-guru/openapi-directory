package operations

import (
	"openapi/pkg/models/shared"
)

type GetHolidaySchemesFromEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetHolidaySchemesFromEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetHolidaySchemesFromEmployerRequest struct {
	PathParams GetHolidaySchemesFromEmployerPathParams
	Headers    GetHolidaySchemesFromEmployerHeaders
}

type GetHolidaySchemesFromEmployerResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
