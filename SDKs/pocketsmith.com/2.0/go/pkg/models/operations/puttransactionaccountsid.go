package operations

import (
	"openapi/pkg/models/shared"
)

type PutTransactionAccountsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutTransactionAccountsIDRequestBody struct {
	InstitutionID *int64 `json:"institution_id,omitempty"`
}

type PutTransactionAccountsIDRequest struct {
	PathParams PutTransactionAccountsIDPathParams
	Request    *PutTransactionAccountsIDRequestBody `request:"mediaType=application/json"`
}

type PutTransactionAccountsIDResponse struct {
	ContentType        string
	Error              *shared.Error
	StatusCode         int64
	TransactionAccount *shared.TransactionAccount
}
