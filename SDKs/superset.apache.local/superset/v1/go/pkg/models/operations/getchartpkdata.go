package operations

import (
	"openapi/pkg/models/shared"
)

type GetChartPkDataPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetChartPkDataQueryParams struct {
	Format *string `queryParam:"style=form,explode=true,name=format"`
	Type   *string `queryParam:"style=form,explode=true,name=type"`
}

type GetChartPkDataSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetChartPkDataRequest struct {
	PathParams  GetChartPkDataPathParams
	QueryParams GetChartPkDataQueryParams
	Security    GetChartPkDataSecurity
}

type GetChartPkData400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPkData401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPkData500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPkDataResponse struct {
	ChartDataAsyncResponseSchema           *shared.ChartDataAsyncResponseSchema
	ChartDataResponseSchema                *shared.ChartDataResponseSchema
	ContentType                            string
	GetChartPkData400ApplicationJSONObject *GetChartPkData400ApplicationJSON
	GetChartPkData401ApplicationJSONObject *GetChartPkData401ApplicationJSON
	GetChartPkData500ApplicationJSONObject *GetChartPkData500ApplicationJSON
	StatusCode                             int64
}
