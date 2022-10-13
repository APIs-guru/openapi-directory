package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAccountsIDRequest struct {
	PathParams GetAccountsIDPathParams
}

type GetAccountsIDResponse struct {
	Account     *shared.Account
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
