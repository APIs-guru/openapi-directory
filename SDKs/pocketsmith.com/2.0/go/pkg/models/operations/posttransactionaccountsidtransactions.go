package operations

import (
	"openapi/pkg/models/shared"
)

type PostTransactionAccountsIDTransactionsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostTransactionAccountsIDTransactionsRequestBody struct {
	Amount       float64 `json:"amount"`
	CategoryID   *int64  `json:"category_id"`
	ChequeNumber *string `json:"cheque_number"`
	Date         string  `json:"date"`
	IsTransfer   *bool   `json:"is_transfer"`
	Labels       *string `json:"labels"`
	Memo         *string `json:"memo"`
	Note         *string `json:"note"`
	Payee        string  `json:"payee"`
}

type PostTransactionAccountsIDTransactionsRequest struct {
	PathParams PostTransactionAccountsIDTransactionsPathParams
	Request    *PostTransactionAccountsIDTransactionsRequestBody `request:"mediaType=application/json"`
}

type PostTransactionAccountsIDTransactionsResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	Transaction *shared.Transaction
}
