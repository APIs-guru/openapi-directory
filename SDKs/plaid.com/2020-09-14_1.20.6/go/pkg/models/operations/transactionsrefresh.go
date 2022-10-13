package operations

import (
	"openapi/pkg/models/shared"
)

type TransactionsRefreshRequest struct {
	Request shared.TransactionsRefreshRequest `request:"mediaType=application/json"`
}

type TransactionsRefreshResponse struct {
	ContentType                 string
	Error                       map[string]interface{}
	StatusCode                  int64
	TransactionsRefreshResponse *shared.TransactionsRefreshResponse
}
