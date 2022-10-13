package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountResponse struct {
	Account       *shared.Account
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
