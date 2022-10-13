package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTransactionsByCategoryPathParams struct {
	BudgetID   string `pathParam:"style=simple,explode=false,name=budget_id"`
	CategoryID string `pathParam:"style=simple,explode=false,name=category_id"`
}

type GetTransactionsByCategoryTypeEnum string

const (
	GetTransactionsByCategoryTypeEnumUncategorized GetTransactionsByCategoryTypeEnum = "uncategorized"
	GetTransactionsByCategoryTypeEnumUnapproved    GetTransactionsByCategoryTypeEnum = "unapproved"
)

type GetTransactionsByCategoryQueryParams struct {
	LastKnowledgeOfServer *int64                             `queryParam:"style=form,explode=true,name=last_knowledge_of_server"`
	SinceDate             *time.Time                         `queryParam:"style=form,explode=true,name=since_date"`
	Type                  *GetTransactionsByCategoryTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetTransactionsByCategoryRequest struct {
	PathParams  GetTransactionsByCategoryPathParams
	QueryParams GetTransactionsByCategoryQueryParams
}

type GetTransactionsByCategoryResponse struct {
	ContentType                string
	ErrorResponse              *shared.ErrorResponse
	HybridTransactionsResponse *shared.HybridTransactionsResponse
	StatusCode                 int64
}
