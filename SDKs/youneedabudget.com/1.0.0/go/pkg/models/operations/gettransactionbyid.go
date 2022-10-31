package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionByIDPathParams struct {
	BudgetID      string `pathParam:"style=simple,explode=false,name=budget_id"`
	TransactionID string `pathParam:"style=simple,explode=false,name=transaction_id"`
}

type GetTransactionByIDRequest struct {
	PathParams GetTransactionByIDPathParams
}

type GetTransactionByIDResponse struct {
	ContentType         string
	ErrorResponse       *shared.ErrorResponse
	StatusCode          int64
	TransactionResponse *shared.TransactionResponse
}
