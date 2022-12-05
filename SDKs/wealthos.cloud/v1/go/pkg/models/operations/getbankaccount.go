package operations

import (
	"openapi/pkg/models/shared"
)

type GetBankAccountPathParams struct {
	BankAccountID string `pathParam:"style=simple,explode=false,name=bank_account_id"`
}

type GetBankAccountHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetBankAccountSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetBankAccountRequest struct {
	PathParams GetBankAccountPathParams
	Headers    GetBankAccountHeaders
	Security   GetBankAccountSecurity
}

type GetBankAccountResponse struct {
	ContentType                         string
	StatusCode                          int64
	GetBankAccount200ApplicationJSONAny *interface{}
	GetBankAccount400ApplicationJSONAny *interface{}
	GetBankAccount401ApplicationJSONAny *interface{}
	GetBankAccount403ApplicationJSONAny *interface{}
	GetBankAccount404ApplicationJSONAny *interface{}
	GetBankAccount409ApplicationJSONAny *interface{}
	GetBankAccount429ApplicationJSONAny *interface{}
	GetBankAccount500ApplicationJSONAny *interface{}
}
