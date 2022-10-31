package operations

import (
	"openapi/pkg/models/shared"
)

type GetCisTransactionsFromEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetCisTransactionsFromEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetCisTransactionsFromEmployerRequest struct {
	PathParams GetCisTransactionsFromEmployerPathParams
	Headers    GetCisTransactionsFromEmployerHeaders
}

type GetCisTransactionsFromEmployerResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
