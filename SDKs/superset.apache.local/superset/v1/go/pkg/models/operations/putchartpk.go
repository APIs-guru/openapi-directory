package operations

import (
	"openapi/pkg/models/shared"
)

type PutChartPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type PutChartPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PutChartPkRequest struct {
	PathParams PutChartPkPathParams
	Request    shared.ChartRestAPIPut `request:"mediaType=application/json"`
	Security   PutChartPkSecurity
}

type PutChartPk200ApplicationJSON struct {
	ID     *float64                `json:"id,omitempty"`
	Result *shared.ChartRestAPIPut `json:"result,omitempty"`
}

type PutChartPk400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutChartPk401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutChartPk403ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutChartPk404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutChartPk422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutChartPk500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutChartPkResponse struct {
	ContentType                        string
	PutChartPk200ApplicationJSONObject *PutChartPk200ApplicationJSON
	PutChartPk400ApplicationJSONObject *PutChartPk400ApplicationJSON
	PutChartPk401ApplicationJSONObject *PutChartPk401ApplicationJSON
	PutChartPk403ApplicationJSONObject *PutChartPk403ApplicationJSON
	PutChartPk404ApplicationJSONObject *PutChartPk404ApplicationJSON
	PutChartPk422ApplicationJSONObject *PutChartPk422ApplicationJSON
	PutChartPk500ApplicationJSONObject *PutChartPk500ApplicationJSON
	StatusCode                         int64
}
