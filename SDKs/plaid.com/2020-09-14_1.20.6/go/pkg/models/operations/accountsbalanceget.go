package operations

import (
	"openapi/pkg/models/shared"
)

type AccountsBalanceGetRequest struct {
	Request shared.AccountsBalanceGetRequest `request:"mediaType=application/json"`
}

type AccountsBalanceGetResponse struct {
	AccountsGetResponse map[string]interface{}
	ContentType         string
	StatusCode          int64
}
