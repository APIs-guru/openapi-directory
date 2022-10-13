package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRtiTransactionPathParams struct {
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	RtiTransactionID string `pathParam:"style=simple,explode=false,name=RtiTransactionId"`
}

type DeleteRtiTransactionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteRtiTransactionRequest struct {
	PathParams DeleteRtiTransactionPathParams
	Headers    DeleteRtiTransactionHeaders
}

type DeleteRtiTransactionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
