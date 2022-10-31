package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionAccountsIDTransactionsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetTransactionAccountsIDTransactionsTypeEnum string

const (
	GetTransactionAccountsIDTransactionsTypeEnumDebit  GetTransactionAccountsIDTransactionsTypeEnum = "debit"
	GetTransactionAccountsIDTransactionsTypeEnumCredit GetTransactionAccountsIDTransactionsTypeEnum = "credit"
)

type GetTransactionAccountsIDTransactionsQueryParams struct {
	EndDate           *string                                       `queryParam:"style=form,explode=true,name=end_date"`
	OnlyUncategorised *int64                                        `queryParam:"style=form,explode=true,name=only_uncategorised"`
	Page              *int64                                        `queryParam:"style=form,explode=true,name=page"`
	Search            *string                                       `queryParam:"style=form,explode=true,name=search"`
	StartDate         *string                                       `queryParam:"style=form,explode=true,name=start_date"`
	Type              *GetTransactionAccountsIDTransactionsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetTransactionAccountsIDTransactionsRequest struct {
	PathParams  GetTransactionAccountsIDTransactionsPathParams
	QueryParams GetTransactionAccountsIDTransactionsQueryParams
}

type GetTransactionAccountsIDTransactionsResponse struct {
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
	Transactions []shared.Transaction
}
