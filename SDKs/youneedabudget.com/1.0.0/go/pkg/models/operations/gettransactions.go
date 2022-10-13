package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTransactionsPathParams struct {
	BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
}

type GetTransactionsTypeEnum string

const (
	GetTransactionsTypeEnumUncategorized GetTransactionsTypeEnum = "uncategorized"
	GetTransactionsTypeEnumUnapproved    GetTransactionsTypeEnum = "unapproved"
)

type GetTransactionsQueryParams struct {
	LastKnowledgeOfServer *int64                   `queryParam:"style=form,explode=true,name=last_knowledge_of_server"`
	SinceDate             *time.Time               `queryParam:"style=form,explode=true,name=since_date"`
	Type                  *GetTransactionsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetTransactionsRequest struct {
	PathParams  GetTransactionsPathParams
	QueryParams GetTransactionsQueryParams
}

type GetTransactionsResponse struct {
	ContentType          string
	ErrorResponse        *shared.ErrorResponse
	StatusCode           int64
	TransactionsResponse *shared.TransactionsResponse
}
