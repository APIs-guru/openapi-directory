package operations

import (
	"openapi/pkg/models/shared"
)

type GetPotPathParams struct {
	PotID string `pathParam:"style=simple,explode=false,name=pot_id"`
}

type GetPotHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetPotSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetPotRequest struct {
	PathParams GetPotPathParams
	Headers    GetPotHeaders
	Security   GetPotSecurity
}

type GetPotResponse struct {
	ContentType                 string
	StatusCode                  int64
	GetPot200ApplicationJSONAny *interface{}
	GetPot401ApplicationJSONAny *interface{}
	GetPot403ApplicationJSONAny *interface{}
	GetPot404ApplicationJSONAny *interface{}
	GetPot429ApplicationJSONAny *interface{}
	GetPot500ApplicationJSONAny *interface{}
}
