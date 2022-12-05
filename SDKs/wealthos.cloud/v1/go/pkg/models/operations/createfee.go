package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFeeHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type CreateFeeSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreateFeeRequest struct {
	Headers  CreateFeeHeaders
	Request  interface{} `request:"mediaType=application/json"`
	Security CreateFeeSecurity
}

type CreateFeeResponse struct {
	ContentType                    string
	RootTypeForFeeCreationResponse *interface{}
	StatusCode                     int64
	CreateFee400ApplicationJSONAny *interface{}
	CreateFee401ApplicationJSONAny *interface{}
	CreateFee403ApplicationJSONAny *interface{}
	CreateFee404ApplicationJSONAny *interface{}
	CreateFee409ApplicationJSONAny *interface{}
	CreateFee429ApplicationJSONAny *interface{}
	CreateFee500ApplicationJSONAny *interface{}
}
