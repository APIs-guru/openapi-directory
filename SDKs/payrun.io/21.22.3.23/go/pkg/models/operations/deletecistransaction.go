package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCisTransactionPathParams struct {
	CisTransactionID string `pathParam:"style=simple,explode=false,name=CisTransactionId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type DeleteCisTransactionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteCisTransactionRequest struct {
	PathParams DeleteCisTransactionPathParams
	Headers    DeleteCisTransactionHeaders
}

type DeleteCisTransactionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
