package operations

import (
	"openapi/pkg/models/shared"
)

type BankTransferCancelRequest struct {
	Request shared.BankTransferCancelRequest `request:"mediaType=application/json"`
}

type BankTransferCancelResponse struct {
	BankTransferCancelResponse map[string]interface{}
	ContentType                string
	Error                      map[string]interface{}
	StatusCode                 int64
}
