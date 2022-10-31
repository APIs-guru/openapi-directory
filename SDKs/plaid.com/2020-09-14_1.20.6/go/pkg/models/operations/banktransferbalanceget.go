package operations

import (
	"openapi/pkg/models/shared"
)

type BankTransferBalanceGetRequest struct {
	Request shared.BankTransferBalanceGetRequest `request:"mediaType=application/json"`
}

type BankTransferBalanceGetResponse struct {
	BankTransferBalanceGetResponse map[string]interface{}
	ContentType                    string
	Error                          map[string]interface{}
	StatusCode                     int64
}
