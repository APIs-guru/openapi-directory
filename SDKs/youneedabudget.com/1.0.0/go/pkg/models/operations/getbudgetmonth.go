package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetBudgetMonthPathParams struct {
	BudgetID string    `pathParam:"style=simple,explode=false,name=budget_id"`
	Month    time.Time `pathParam:"style=simple,explode=false,name=month"`
}

type GetBudgetMonthRequest struct {
	PathParams GetBudgetMonthPathParams
}

type GetBudgetMonthResponse struct {
	ContentType         string
	ErrorResponse       *shared.ErrorResponse
	MonthDetailResponse *shared.MonthDetailResponse
	StatusCode          int64
}
