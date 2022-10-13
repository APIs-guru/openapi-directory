package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayeeLocationsPathParams struct {
	BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
}

type GetPayeeLocationsRequest struct {
	PathParams GetPayeeLocationsPathParams
}

type GetPayeeLocationsResponse struct {
	ContentType            string
	ErrorResponse          *shared.ErrorResponse
	PayeeLocationsResponse *shared.PayeeLocationsResponse
	StatusCode             int64
}
