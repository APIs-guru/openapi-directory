package operations

import (
	"openapi/pkg/models/shared"
)

type BankTransferEventListRequest struct {
	Request shared.BankTransferEventListRequest `request:"mediaType=application/json"`
}

type BankTransferEventListResponse struct {
	BankTransferEventListResponse map[string]interface{}
	ContentType                   string
	Error                         map[string]interface{}
	StatusCode                    int64
}
