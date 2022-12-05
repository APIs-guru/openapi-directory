package operations

import (
	"openapi/pkg/models/shared"
)

type GetRatesRateTypeEnum string

const (
	GetRatesRateTypeEnumFxSpot GetRatesRateTypeEnum = "fx-spot"
)

type GetRatesPathParams struct {
	RateType GetRatesRateTypeEnum `pathParam:"style=simple,explode=false,name=rate_type"`
}

type GetRatesHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetRatesSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetRates200ApplicationJSON struct {
	Rates []interface{} `json:"rates"`
}

type GetRatesRequest struct {
	PathParams GetRatesPathParams
	Headers    GetRatesHeaders
	Security   GetRatesSecurity
}

type GetRatesResponse struct {
	ContentType                      string
	StatusCode                       int64
	GetRates200ApplicationJSONObject *GetRates200ApplicationJSON
	GetRates401ApplicationJSONAny    *interface{}
	GetRates403ApplicationJSONAny    *interface{}
	GetRates404ApplicationJSONAny    *interface{}
	GetRates429ApplicationJSONAny    *interface{}
	GetRates500ApplicationJSONAny    *interface{}
}
