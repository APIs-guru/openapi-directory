package operations

import (
	"openapi/pkg/models/shared"
)

type GetPotValuePathParams struct {
	PotID string `pathParam:"style=simple,explode=false,name=pot_id"`
}

type GetPotValueHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetPotValueSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetPotValueRequest struct {
	PathParams GetPotValuePathParams
	Headers    GetPotValueHeaders
	Security   GetPotValueSecurity
}

type GetPotValueResponse struct {
	ContentType                      string
	StatusCode                       int64
	GetPotValue200ApplicationJSONAny *interface{}
	GetPotValue400ApplicationJSONAny *interface{}
	GetPotValue401ApplicationJSONAny *interface{}
	GetPotValue403ApplicationJSONAny *interface{}
	GetPotValue404ApplicationJSONAny *interface{}
	GetPotValue429ApplicationJSONAny *interface{}
	GetPotValue500ApplicationJSONAny *interface{}
}
