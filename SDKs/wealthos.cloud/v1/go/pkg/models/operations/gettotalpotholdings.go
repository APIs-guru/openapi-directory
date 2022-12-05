package operations

import (
	"openapi/pkg/models/shared"
)

type GetTotalPotHoldingsPathParams struct {
	InvestorID string `pathParam:"style=simple,explode=false,name=investor_id"`
}

type GetTotalPotHoldingsHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetTotalPotHoldingsSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTotalPotHoldingsRequest struct {
	PathParams GetTotalPotHoldingsPathParams
	Headers    GetTotalPotHoldingsHeaders
	Security   GetTotalPotHoldingsSecurity
}

type GetTotalPotHoldingsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetTotalPotHoldings200ApplicationJSONAny *interface{}
	GetTotalPotHoldings401ApplicationJSONAny *interface{}
	GetTotalPotHoldings403ApplicationJSONAny *interface{}
	GetTotalPotHoldings404ApplicationJSONAny *interface{}
	GetTotalPotHoldings429ApplicationJSONAny *interface{}
	GetTotalPotHoldings500ApplicationJSONAny *interface{}
}
