package operations

import (
	"openapi/pkg/models/shared"
)

type GetPotHoldingsPathParams struct {
	PotID string `pathParam:"style=simple,explode=false,name=pot_id"`
}

type GetPotHoldingsHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetPotHoldingsSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetPotHoldingsRequest struct {
	PathParams GetPotHoldingsPathParams
	Headers    GetPotHoldingsHeaders
	Security   GetPotHoldingsSecurity
}

type GetPotHoldingsResponse struct {
	ContentType                         string
	StatusCode                          int64
	GetPotHoldings200ApplicationJSONAny *interface{}
	GetPotHoldings400ApplicationJSONAny *interface{}
	GetPotHoldings401ApplicationJSONAny *interface{}
	GetPotHoldings403ApplicationJSONAny *interface{}
	GetPotHoldings404ApplicationJSONAny *interface{}
	GetPotHoldings429ApplicationJSONAny *interface{}
	GetPotHoldings500ApplicationJSONAny *interface{}
}
