package operations

import (
	"openapi/pkg/models/shared"
)

type GetDashboardIDOrSlugChartsPathParams struct {
	IDOrSlug string `pathParam:"style=simple,explode=false,name=id_or_slug"`
}

type GetDashboardIDOrSlugChartsSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDashboardIDOrSlugChartsRequest struct {
	PathParams GetDashboardIDOrSlugChartsPathParams
	Security   GetDashboardIDOrSlugChartsSecurity
}

type GetDashboardIDOrSlugCharts200ApplicationJSON struct {
	Result []shared.ChartEntityResponseSchema `json:"result"`
}

type GetDashboardIDOrSlugCharts400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDashboardIDOrSlugCharts401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDashboardIDOrSlugCharts404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDashboardIDOrSlugChartsResponse struct {
	ContentType                                        string
	GetDashboardIDOrSlugCharts200ApplicationJSONObject *GetDashboardIDOrSlugCharts200ApplicationJSON
	GetDashboardIDOrSlugCharts400ApplicationJSONObject *GetDashboardIDOrSlugCharts400ApplicationJSON
	GetDashboardIDOrSlugCharts401ApplicationJSONObject *GetDashboardIDOrSlugCharts401ApplicationJSON
	GetDashboardIDOrSlugCharts404ApplicationJSONObject *GetDashboardIDOrSlugCharts404ApplicationJSON
	StatusCode                                         int64
}
