package operations

import (
	"openapi/pkg/models/shared"
)

type GetPotTransactionsPathParams struct {
	PotID string `pathParam:"style=simple,explode=false,name=pot_id"`
}

type GetPotTransactionsSortEnum string

const (
	GetPotTransactionsSortEnumAsc  GetPotTransactionsSortEnum = "asc"
	GetPotTransactionsSortEnumDesc GetPotTransactionsSortEnum = "desc"
)

type GetPotTransactionsQueryParams struct {
	From               *string                     `queryParam:"style=form,explode=true,name=from"`
	PageNumber         *string                     `queryParam:"style=form,explode=true,name=page_number"`
	PageSize           *string                     `queryParam:"style=form,explode=true,name=page_size"`
	Sort               *GetPotTransactionsSortEnum `queryParam:"style=form,explode=true,name=sort"`
	SubTransactionType *string                     `queryParam:"style=form,explode=true,name=sub_transaction_type"`
	To                 *string                     `queryParam:"style=form,explode=true,name=to"`
}

type GetPotTransactionsHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetPotTransactionsSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetPotTransactionsRequest struct {
	PathParams  GetPotTransactionsPathParams
	QueryParams GetPotTransactionsQueryParams
	Headers     GetPotTransactionsHeaders
	Security    GetPotTransactionsSecurity
}

type GetPotTransactionsResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetPotTransactions200ApplicationJSONAny *interface{}
	GetPotTransactions401ApplicationJSONAny *interface{}
	GetPotTransactions403ApplicationJSONAny *interface{}
	GetPotTransactions404ApplicationJSONAny *interface{}
	GetPotTransactions429ApplicationJSONAny *interface{}
	GetPotTransactions500ApplicationJSONAny *interface{}
}
