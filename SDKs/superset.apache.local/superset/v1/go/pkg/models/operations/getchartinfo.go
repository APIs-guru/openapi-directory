package operations

import (
	"openapi/pkg/models/shared"
)

type GetChartInfoQueryParams struct {
	Q *shared.GetInfoSchema `queryParam:"serialization=json,name=q"`
}

type GetChartInfoSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetChartInfoRequest struct {
	QueryParams GetChartInfoQueryParams
	Security    GetChartInfoSecurity
}

type GetChartInfo200ApplicationJSONFiltersColumnName struct {
	Name     *string `json:"name"`
	Operator *string `json:"operator"`
}

type GetChartInfo200ApplicationJSONFilters struct {
	ColumnName []GetChartInfo200ApplicationJSONFiltersColumnName `json:"column_name"`
}

type GetChartInfo200ApplicationJSON struct {
	AddColumns  map[string]interface{}                 `json:"add_columns"`
	EditColumns map[string]interface{}                 `json:"edit_columns"`
	Filters     *GetChartInfo200ApplicationJSONFilters `json:"filters"`
	Permissions []string                               `json:"permissions"`
}

type GetChartInfo400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartInfo401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartInfo422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartInfo500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartInfoResponse struct {
	ContentType                          string
	GetChartInfo200ApplicationJSONObject *GetChartInfo200ApplicationJSON
	GetChartInfo400ApplicationJSONObject *GetChartInfo400ApplicationJSON
	GetChartInfo401ApplicationJSONObject *GetChartInfo401ApplicationJSON
	GetChartInfo422ApplicationJSONObject *GetChartInfo422ApplicationJSON
	GetChartInfo500ApplicationJSONObject *GetChartInfo500ApplicationJSON
	StatusCode                           int64
}
