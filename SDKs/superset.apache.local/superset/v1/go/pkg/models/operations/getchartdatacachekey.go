package operations

import (
	"openapi/pkg/models/shared"
)

type GetChartDataCacheKeyPathParams struct {
	CacheKey string `pathParam:"style=simple,explode=false,name=cache_key"`
}

type GetChartDataCacheKeySecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetChartDataCacheKey400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartDataCacheKey401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartDataCacheKey404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartDataCacheKey422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartDataCacheKey500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartDataCacheKeyRequest struct {
	PathParams GetChartDataCacheKeyPathParams
	Security   GetChartDataCacheKeySecurity
}

type GetChartDataCacheKeyResponse struct {
	ChartDataResponseSchema                      *shared.ChartDataResponseSchema
	ContentType                                  string
	GetChartDataCacheKey400ApplicationJSONObject *GetChartDataCacheKey400ApplicationJSON
	GetChartDataCacheKey401ApplicationJSONObject *GetChartDataCacheKey401ApplicationJSON
	GetChartDataCacheKey404ApplicationJSONObject *GetChartDataCacheKey404ApplicationJSON
	GetChartDataCacheKey422ApplicationJSONObject *GetChartDataCacheKey422ApplicationJSON
	GetChartDataCacheKey500ApplicationJSONObject *GetChartDataCacheKey500ApplicationJSON
	StatusCode                                   int64
}
