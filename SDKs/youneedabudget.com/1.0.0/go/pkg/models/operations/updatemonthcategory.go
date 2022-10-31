package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateMonthCategoryPathParams struct {
	BudgetID   string    `pathParam:"style=simple,explode=false,name=budget_id"`
	CategoryID string    `pathParam:"style=simple,explode=false,name=category_id"`
	Month      time.Time `pathParam:"style=simple,explode=false,name=month"`
}

type UpdateMonthCategoryRequest struct {
	PathParams UpdateMonthCategoryPathParams
	Request    shared.SaveMonthCategoryWrapper `request:"mediaType=application/json"`
}

type UpdateMonthCategoryResponse struct {
	ContentType          string
	ErrorResponse        *shared.ErrorResponse
	SaveCategoryResponse *shared.SaveCategoryResponse
	StatusCode           int64
}
