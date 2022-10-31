package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersIDTransactionAccountsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetUsersIDTransactionAccountsRequest struct {
	PathParams GetUsersIDTransactionAccountsPathParams
}

type GetUsersIDTransactionAccountsResponse struct {
	ContentType         string
	Error               *shared.Error
	StatusCode          int64
	TransactionAccounts []shared.TransactionAccount
}
