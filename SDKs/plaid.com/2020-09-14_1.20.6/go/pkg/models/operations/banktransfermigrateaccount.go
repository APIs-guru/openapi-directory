package operations

import (
	"openapi/pkg/models/shared"
)

type BankTransferMigrateAccountRequest struct {
	Request shared.BankTransferMigrateAccountRequest `request:"mediaType=application/json"`
}

type BankTransferMigrateAccountResponse struct {
	BankTransferMigrateAccountResponse map[string]interface{}
	ContentType                        string
	Error                              map[string]interface{}
	StatusCode                         int64
}
