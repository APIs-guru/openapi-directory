package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetMonthCategoryByIDPathParams struct {
	BudgetID   string    `pathParam:"style=simple,explode=false,name=budget_id"`
	CategoryID string    `pathParam:"style=simple,explode=false,name=category_id"`
	Month      time.Time `pathParam:"style=simple,explode=false,name=month"`
}

type GetMonthCategoryByIDRequest struct {
	PathParams GetMonthCategoryByIDPathParams
}

type GetMonthCategoryByIDResponse struct {
	CategoryResponse *shared.CategoryResponse
	ContentType      string
	ErrorResponse    *shared.ErrorResponse
	StatusCode       int64
}
