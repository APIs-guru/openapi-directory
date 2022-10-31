package operations

import (
	"openapi/pkg/models/shared"
)

type GetScheduledTransactionByIDPathParams struct {
	BudgetID               string `pathParam:"style=simple,explode=false,name=budget_id"`
	ScheduledTransactionID string `pathParam:"style=simple,explode=false,name=scheduled_transaction_id"`
}

type GetScheduledTransactionByIDRequest struct {
	PathParams GetScheduledTransactionByIDPathParams
}

type GetScheduledTransactionByIDResponse struct {
	ContentType                  string
	ErrorResponse                *shared.ErrorResponse
	ScheduledTransactionResponse *shared.ScheduledTransactionResponse
	StatusCode                   int64
}
