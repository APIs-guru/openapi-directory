package operations

import (
	"openapi/pkg/models/shared"
)

type BankTransferListRequest struct {
	Request shared.BankTransferListRequest `request:"mediaType=application/json"`
}

type BankTransferListResponse struct {
	BankTransferListResponse map[string]interface{}
	ContentType              string
	Error                    map[string]interface{}
	StatusCode               int64
}
