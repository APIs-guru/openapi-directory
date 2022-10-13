package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionAccountsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetTransactionAccountsIDRequest struct {
	PathParams GetTransactionAccountsIDPathParams
}

type GetTransactionAccountsIDResponse struct {
	ContentType        string
	Error              *shared.Error
	StatusCode         int64
	TransactionAccount *shared.TransactionAccount
}
