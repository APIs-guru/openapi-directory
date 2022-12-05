package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePotHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type CreatePotSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreatePotRequest struct {
	Headers  CreatePotHeaders
	Request  *interface{} `request:"mediaType=application/json"`
	Security CreatePotSecurity
}

type CreatePotResponse struct {
	ContentType                    string
	StatusCode                     int64
	CreatePot201ApplicationJSONAny *interface{}
	CreatePot400ApplicationJSONAny *interface{}
	CreatePot401ApplicationJSONAny *interface{}
	CreatePot403ApplicationJSONAny *interface{}
	CreatePot409ApplicationJSONAny *interface{}
	CreatePot429ApplicationJSONAny *interface{}
	CreatePot500ApplicationJSONAny *interface{}
}
