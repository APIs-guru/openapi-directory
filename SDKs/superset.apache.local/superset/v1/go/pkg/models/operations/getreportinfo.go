package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportInfoQueryParams struct {
	Q *shared.GetInfoSchema `queryParam:"serialization=json,name=q"`
}

type GetReportInfoSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetReportInfoRequest struct {
	QueryParams GetReportInfoQueryParams
	Security    GetReportInfoSecurity
}

type GetReportInfo200ApplicationJSONFiltersColumnName struct {
	Name     *string `json:"name,omitempty"`
	Operator *string `json:"operator,omitempty"`
}

type GetReportInfo200ApplicationJSONFilters struct {
	ColumnName []GetReportInfo200ApplicationJSONFiltersColumnName `json:"column_name,omitempty"`
}

type GetReportInfo200ApplicationJSON struct {
	AddColumns  map[string]interface{}                  `json:"add_columns,omitempty"`
	EditColumns map[string]interface{}                  `json:"edit_columns,omitempty"`
	Filters     *GetReportInfo200ApplicationJSONFilters `json:"filters,omitempty"`
	Permissions []string                                `json:"permissions,omitempty"`
}

type GetReportInfo400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetReportInfo401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetReportInfo422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetReportInfo500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetReportInfoResponse struct {
	ContentType                           string
	GetReportInfo200ApplicationJSONObject *GetReportInfo200ApplicationJSON
	GetReportInfo400ApplicationJSONObject *GetReportInfo400ApplicationJSON
	GetReportInfo401ApplicationJSONObject *GetReportInfo401ApplicationJSON
	GetReportInfo422ApplicationJSONObject *GetReportInfo422ApplicationJSON
	GetReportInfo500ApplicationJSONObject *GetReportInfo500ApplicationJSON
	StatusCode                            int64
}
