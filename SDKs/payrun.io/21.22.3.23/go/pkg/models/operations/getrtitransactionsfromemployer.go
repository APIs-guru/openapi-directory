package operations

import (
	"openapi/pkg/models/shared"
)

type GetRtiTransactionsFromEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetRtiTransactionsFromEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetRtiTransactionsFromEmployerRequest struct {
	PathParams GetRtiTransactionsFromEmployerPathParams
	Headers    GetRtiTransactionsFromEmployerHeaders
}

type GetRtiTransactionsFromEmployerResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
