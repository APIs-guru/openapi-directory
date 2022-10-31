package operations

import (
	"openapi/pkg/models/shared"
)

type BulkCreateTransactionsPathParams struct {
	BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
}

type BulkCreateTransactionsRequest struct {
	PathParams BulkCreateTransactionsPathParams
	Request    shared.BulkTransactions `request:"mediaType=application/json"`
}

type BulkCreateTransactionsResponse struct {
	BulkResponse  *shared.BulkResponse
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
