package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTransactionPathParams struct {
	BudgetID      string `pathParam:"style=simple,explode=false,name=budget_id"`
	TransactionID string `pathParam:"style=simple,explode=false,name=transaction_id"`
}

type UpdateTransactionRequest struct {
	PathParams UpdateTransactionPathParams
	Request    shared.SaveTransactionWrapper `request:"mediaType=application/json"`
}

type UpdateTransactionResponse struct {
	ContentType         string
	ErrorResponse       *shared.ErrorResponse
	StatusCode          int64
	TransactionResponse *shared.TransactionResponse
}
