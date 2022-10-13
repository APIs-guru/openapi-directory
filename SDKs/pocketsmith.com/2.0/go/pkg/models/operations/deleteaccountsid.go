package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAccountsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteAccountsIDRequest struct {
	PathParams DeleteAccountsIDPathParams
}

type DeleteAccountsIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
