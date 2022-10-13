package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsIDTransactionsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAccountsIDTransactionsTypeEnum string

const (
	GetAccountsIDTransactionsTypeEnumDebit  GetAccountsIDTransactionsTypeEnum = "debit"
	GetAccountsIDTransactionsTypeEnumCredit GetAccountsIDTransactionsTypeEnum = "credit"
)

type GetAccountsIDTransactionsQueryParams struct {
	EndDate           *string                            `queryParam:"style=form,explode=true,name=end_date"`
	OnlyUncategorised *int64                             `queryParam:"style=form,explode=true,name=only_uncategorised"`
	Page              *int64                             `queryParam:"style=form,explode=true,name=page"`
	Search            *string                            `queryParam:"style=form,explode=true,name=search"`
	StartDate         *string                            `queryParam:"style=form,explode=true,name=start_date"`
	Type              *GetAccountsIDTransactionsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetAccountsIDTransactionsRequest struct {
	PathParams  GetAccountsIDTransactionsPathParams
	QueryParams GetAccountsIDTransactionsQueryParams
}

type GetAccountsIDTransactionsResponse struct {
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
	Transactions []shared.Transaction
}
