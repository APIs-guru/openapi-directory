package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersIDTransactionsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetUsersIDTransactionsTypeEnum string

const (
	GetUsersIDTransactionsTypeEnumDebit  GetUsersIDTransactionsTypeEnum = "debit"
	GetUsersIDTransactionsTypeEnumCredit GetUsersIDTransactionsTypeEnum = "credit"
)

type GetUsersIDTransactionsQueryParams struct {
	EndDate           *string                         `queryParam:"style=form,explode=true,name=end_date"`
	OnlyUncategorised *int64                          `queryParam:"style=form,explode=true,name=only_uncategorised"`
	Page              *int64                          `queryParam:"style=form,explode=true,name=page"`
	Search            *string                         `queryParam:"style=form,explode=true,name=search"`
	StartDate         *string                         `queryParam:"style=form,explode=true,name=start_date"`
	Type              *GetUsersIDTransactionsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetUsersIDTransactionsRequest struct {
	PathParams  GetUsersIDTransactionsPathParams
	QueryParams GetUsersIDTransactionsQueryParams
}

type GetUsersIDTransactionsResponse struct {
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
	Transactions []shared.Transaction
}
