package operations

import (
	"openapi/pkg/models/shared"
)

type GetChartPkCacheScreenshotPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetChartPkCacheScreenshotQueryParams struct {
	Q *shared.ScreenshotQuerySchema `queryParam:"serialization=json,name=q"`
}

type GetChartPkCacheScreenshotSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetChartPkCacheScreenshotRequest struct {
	PathParams  GetChartPkCacheScreenshotPathParams
	QueryParams GetChartPkCacheScreenshotQueryParams
	Security    GetChartPkCacheScreenshotSecurity
}

type GetChartPkCacheScreenshot400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPkCacheScreenshot401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPkCacheScreenshot404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPkCacheScreenshot500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPkCacheScreenshotResponse struct {
	ChartCacheScreenshotResponseSchema                *shared.ChartCacheScreenshotResponseSchema
	ContentType                                       string
	GetChartPkCacheScreenshot400ApplicationJSONObject *GetChartPkCacheScreenshot400ApplicationJSON
	GetChartPkCacheScreenshot401ApplicationJSONObject *GetChartPkCacheScreenshot401ApplicationJSON
	GetChartPkCacheScreenshot404ApplicationJSONObject *GetChartPkCacheScreenshot404ApplicationJSON
	GetChartPkCacheScreenshot500ApplicationJSONObject *GetChartPkCacheScreenshot500ApplicationJSON
	StatusCode                                        int64
}
