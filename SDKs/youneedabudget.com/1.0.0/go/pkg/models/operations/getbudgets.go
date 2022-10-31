package operations

import (
	"openapi/pkg/models/shared"
)

type GetBudgetsQueryParams struct {
	IncludeAccounts *bool `queryParam:"style=form,explode=true,name=include_accounts"`
}

type GetBudgetsRequest struct {
	QueryParams GetBudgetsQueryParams
}

type GetBudgetsResponse struct {
	BudgetSummaryResponse *shared.BudgetSummaryResponse
	ContentType           string
	ErrorResponse         *shared.ErrorResponse
	StatusCode            int64
}
