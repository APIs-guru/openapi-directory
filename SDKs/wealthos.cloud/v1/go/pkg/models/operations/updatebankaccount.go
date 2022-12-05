package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBankAccountPathParams struct {
	BankAccountID string `pathParam:"style=simple,explode=false,name=bank_account_id"`
}

type UpdateBankAccountHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type UpdateBankAccountSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateBankAccountRequest struct {
	PathParams UpdateBankAccountPathParams
	Headers    UpdateBankAccountHeaders
	Request    interface{} `request:"mediaType=application/json"`
	Security   UpdateBankAccountSecurity
}

type UpdateBankAccountResponse struct {
	ContentType                            string
	StatusCode                             int64
	UpdateBankAccount201ApplicationJSONAny *interface{}
	UpdateBankAccount400ApplicationJSONAny *interface{}
	UpdateBankAccount401ApplicationJSONAny *interface{}
	UpdateBankAccount403ApplicationJSONAny *interface{}
	UpdateBankAccount404ApplicationJSONAny *interface{}
	UpdateBankAccount409ApplicationJSONAny *interface{}
	UpdateBankAccount429ApplicationJSONAny *interface{}
	UpdateBankAccount500ApplicationJSONAny *interface{}
}
