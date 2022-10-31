package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsPathParams struct {
	BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
}

type GetAccountsQueryParams struct {
	LastKnowledgeOfServer *int64 `queryParam:"style=form,explode=true,name=last_knowledge_of_server"`
}

type GetAccountsRequest struct {
	PathParams  GetAccountsPathParams
	QueryParams GetAccountsQueryParams
}

type GetAccountsResponse struct {
	AccountsResponse *shared.AccountsResponse
	ContentType      string
	ErrorResponse    *shared.ErrorResponse
	StatusCode       int64
}
