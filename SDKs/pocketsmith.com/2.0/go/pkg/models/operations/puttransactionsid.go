package operations

import (
	"openapi/pkg/models/shared"
)

type PutTransactionsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutTransactionsIDQueryParams struct {
	Labels *string `queryParam:"style=form,explode=true,name=labels"`
}

type PutTransactionsIDRequestBody struct {
	Amount       *float64 `json:"amount"`
	CategoryID   *int64   `json:"category_id"`
	ChequeNumber *string  `json:"cheque_number"`
	Date         *string  `json:"date"`
	IsTransfer   *bool    `json:"is_transfer"`
	Memo         *string  `json:"memo"`
	Note         *string  `json:"note"`
	Payee        *string  `json:"payee"`
}

type PutTransactionsIDRequest struct {
	PathParams  PutTransactionsIDPathParams
	QueryParams PutTransactionsIDQueryParams
	Request     *PutTransactionsIDRequestBody `request:"mediaType=application/json"`
}

type PutTransactionsIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	Transaction *shared.Transaction
}
