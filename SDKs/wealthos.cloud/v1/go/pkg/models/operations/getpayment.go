package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentPathParams struct {
	TransactionID string `pathParam:"style=simple,explode=false,name=transaction_id"`
}

type GetPaymentHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetPaymentSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetPaymentRequest struct {
	PathParams GetPaymentPathParams
	Headers    GetPaymentHeaders
	Security   GetPaymentSecurity
}

type GetPaymentResponse struct {
	ContentType                     string
	RootTypeForPayments             *interface{}
	StatusCode                      int64
	GetPayment400ApplicationJSONAny *interface{}
	GetPayment401ApplicationJSONAny *interface{}
	GetPayment403ApplicationJSONAny *interface{}
	GetPayment404ApplicationJSONAny *interface{}
	GetPayment429ApplicationJSONAny *interface{}
	GetPayment500ApplicationJSONAny *interface{}
}
