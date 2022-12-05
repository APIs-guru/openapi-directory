package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBankAccountHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type CreateBankAccountSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreateBankAccountRequest struct {
	Headers  CreateBankAccountHeaders
	Request  *interface{} `request:"mediaType=application/json"`
	Security CreateBankAccountSecurity
}

type CreateBankAccountResponse struct {
	ContentType                            string
	StatusCode                             int64
	CreateBankAccount201ApplicationJSONAny *interface{}
	CreateBankAccount400ApplicationJSONAny *interface{}
	CreateBankAccount401ApplicationJSONAny *interface{}
	CreateBankAccount403ApplicationJSONAny *interface{}
	CreateBankAccount404ApplicationJSONAny *interface{}
	CreateBankAccount409ApplicationJSONAny *interface{}
	CreateBankAccount429ApplicationJSONAny *interface{}
	CreateBankAccount500ApplicationJSONAny *interface{}
}
