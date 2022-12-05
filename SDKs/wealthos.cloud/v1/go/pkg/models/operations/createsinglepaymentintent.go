package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSinglePaymentIntentHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type CreateSinglePaymentIntentSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreateSinglePaymentIntentRequest struct {
	Headers  CreateSinglePaymentIntentHeaders
	Request  interface{} `request:"mediaType=application/json"`
	Security CreateSinglePaymentIntentSecurity
}

type CreateSinglePaymentIntentResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	CreateSinglePaymentIntent201ApplicationJSONAny *interface{}
	CreateSinglePaymentIntent400ApplicationJSONAny *interface{}
	CreateSinglePaymentIntent401ApplicationJSONAny *interface{}
	CreateSinglePaymentIntent403ApplicationJSONAny *interface{}
	CreateSinglePaymentIntent409ApplicationJSONAny *interface{}
	CreateSinglePaymentIntent429ApplicationJSONAny *interface{}
	CreateSinglePaymentIntent500ApplicationJSONAny *interface{}
}
