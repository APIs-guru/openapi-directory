package operations

import (
	"openapi/pkg/models/shared"
)

type GetTotalPotValuePathParams struct {
	InvestorID string `pathParam:"style=simple,explode=false,name=investor_id"`
}

type GetTotalPotValueHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetTotalPotValueSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTotalPotValueRequest struct {
	PathParams GetTotalPotValuePathParams
	Headers    GetTotalPotValueHeaders
	Security   GetTotalPotValueSecurity
}

type GetTotalPotValueResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetTotalPotValue200ApplicationJSONAny *interface{}
	GetTotalPotValue400ApplicationJSONAny *interface{}
	GetTotalPotValue401ApplicationJSONAny *interface{}
	GetTotalPotValue403ApplicationJSONAny *interface{}
	GetTotalPotValue404ApplicationJSONAny *interface{}
	GetTotalPotValue429ApplicationJSONAny *interface{}
	GetTotalPotValue500ApplicationJSONAny *interface{}
}
