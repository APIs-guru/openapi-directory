package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayCodesFromEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetPayCodesFromEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetPayCodesFromEmployerRequest struct {
	PathParams GetPayCodesFromEmployerPathParams
	Headers    GetPayCodesFromEmployerHeaders
}

type GetPayCodesFromEmployerResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
