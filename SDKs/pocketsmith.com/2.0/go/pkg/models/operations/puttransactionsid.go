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
	Amount       *float64 `json:"amount,omitempty"`
	CategoryID   *int64   `json:"category_id,omitempty"`
	ChequeNumber *string  `json:"cheque_number,omitempty"`
	Date         *string  `json:"date,omitempty"`
	IsTransfer   *bool    `json:"is_transfer,omitempty"`
	Memo         *string  `json:"memo,omitempty"`
	Note         *string  `json:"note,omitempty"`
	Payee        *string  `json:"payee,omitempty"`
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
