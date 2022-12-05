package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllBankAccountsQueryParams struct {
	InvestorID *string `queryParam:"style=form,explode=true,name=investor_id"`
}

type GetAllBankAccountsHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetAllBankAccountsSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

// GetAllBankAccounts200ApplicationJSON
// Array of bank accounts
type GetAllBankAccounts200ApplicationJSON struct {
	BankAccounts []interface{} `json:"bankAccounts,omitempty"`
}

type GetAllBankAccountsRequest struct {
	QueryParams GetAllBankAccountsQueryParams
	Headers     GetAllBankAccountsHeaders
	Security    GetAllBankAccountsSecurity
}

type GetAllBankAccountsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetAllBankAccounts200ApplicationJSONObject *GetAllBankAccounts200ApplicationJSON
	GetAllBankAccounts400ApplicationJSONAny    *interface{}
	GetAllBankAccounts401ApplicationJSONAny    *interface{}
	GetAllBankAccounts403ApplicationJSONAny    *interface{}
	GetAllBankAccounts404ApplicationJSONAny    *interface{}
	GetAllBankAccounts409ApplicationJSONAny    *interface{}
	GetAllBankAccounts429ApplicationJSONAny    *interface{}
	GetAllBankAccounts500ApplicationJSONAny    *interface{}
}
