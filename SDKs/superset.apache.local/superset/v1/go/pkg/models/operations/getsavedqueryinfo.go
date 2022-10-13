package operations

import (
	"openapi/pkg/models/shared"
)

type GetSavedQueryInfoQueryParams struct {
	Q *shared.GetInfoSchema `queryParam:"serialization=json,name=q"`
}

type GetSavedQueryInfoSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetSavedQueryInfoRequest struct {
	QueryParams GetSavedQueryInfoQueryParams
	Security    GetSavedQueryInfoSecurity
}

type GetSavedQueryInfo200ApplicationJSONFiltersColumnName struct {
	Name     *string `json:"name"`
	Operator *string `json:"operator"`
}

type GetSavedQueryInfo200ApplicationJSONFilters struct {
	ColumnName []GetSavedQueryInfo200ApplicationJSONFiltersColumnName `json:"column_name"`
}

type GetSavedQueryInfo200ApplicationJSON struct {
	AddColumns  map[string]interface{}                      `json:"add_columns"`
	EditColumns map[string]interface{}                      `json:"edit_columns"`
	Filters     *GetSavedQueryInfo200ApplicationJSONFilters `json:"filters"`
	Permissions []string                                    `json:"permissions"`
}

type GetSavedQueryInfo400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetSavedQueryInfo401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetSavedQueryInfo422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetSavedQueryInfo500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetSavedQueryInfoResponse struct {
	ContentType                               string
	GetSavedQueryInfo200ApplicationJSONObject *GetSavedQueryInfo200ApplicationJSON
	GetSavedQueryInfo400ApplicationJSONObject *GetSavedQueryInfo400ApplicationJSON
	GetSavedQueryInfo401ApplicationJSONObject *GetSavedQueryInfo401ApplicationJSON
	GetSavedQueryInfo422ApplicationJSONObject *GetSavedQueryInfo422ApplicationJSON
	GetSavedQueryInfo500ApplicationJSONObject *GetSavedQueryInfo500ApplicationJSON
	StatusCode                                int64
}
