package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePotPathParams struct {
	PotID string `pathParam:"style=simple,explode=false,name=pot_id"`
}

type UpdatePotHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type UpdatePotSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type UpdatePotRequest struct {
	PathParams UpdatePotPathParams
	Headers    UpdatePotHeaders
	Request    interface{} `request:"mediaType=application/json"`
	Security   UpdatePotSecurity
}

type UpdatePotResponse struct {
	ContentType                    string
	StatusCode                     int64
	UpdatePot200ApplicationJSONAny *interface{}
	UpdatePot400ApplicationJSONAny *interface{}
	UpdatePot401ApplicationJSONAny *interface{}
	UpdatePot403ApplicationJSONAny *interface{}
	UpdatePot404ApplicationJSONAny *interface{}
	UpdatePot409ApplicationJSONAny *interface{}
	UpdatePot429ApplicationJSONAny *interface{}
	UpdatePot500ApplicationJSONAny *interface{}
}
