package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWithdrawalHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type CreateWithdrawalSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreateWithdrawalRequest struct {
	Headers  CreateWithdrawalHeaders
	Request  interface{} `request:"mediaType=application/json"`
	Security CreateWithdrawalSecurity
}

type CreateWithdrawalResponse struct {
	ContentType                           string
	RootTypeForWithdrawalCreationResponse *interface{}
	StatusCode                            int64
	CreateWithdrawal400ApplicationJSONAny *interface{}
	CreateWithdrawal401ApplicationJSONAny *interface{}
	CreateWithdrawal403ApplicationJSONAny *interface{}
	CreateWithdrawal404ApplicationJSONAny *interface{}
	CreateWithdrawal409ApplicationJSONAny *interface{}
	CreateWithdrawal429ApplicationJSONAny *interface{}
	CreateWithdrawal500ApplicationJSONAny *interface{}
}
