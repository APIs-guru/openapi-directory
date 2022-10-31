package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatabaseInfoQueryParams struct {
	Q *shared.GetInfoSchema `queryParam:"serialization=json,name=q"`
}

type GetDatabaseInfoSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatabaseInfoRequest struct {
	QueryParams GetDatabaseInfoQueryParams
	Security    GetDatabaseInfoSecurity
}

type GetDatabaseInfo200ApplicationJSONFiltersColumnName struct {
	Name     *string `json:"name,omitempty"`
	Operator *string `json:"operator,omitempty"`
}

type GetDatabaseInfo200ApplicationJSONFilters struct {
	ColumnName []GetDatabaseInfo200ApplicationJSONFiltersColumnName `json:"column_name,omitempty"`
}

type GetDatabaseInfo200ApplicationJSON struct {
	AddColumns  map[string]interface{}                    `json:"add_columns,omitempty"`
	EditColumns map[string]interface{}                    `json:"edit_columns,omitempty"`
	Filters     *GetDatabaseInfo200ApplicationJSONFilters `json:"filters,omitempty"`
	Permissions []string                                  `json:"permissions,omitempty"`
}

type GetDatabaseInfo400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabaseInfo401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabaseInfo422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabaseInfo500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabaseInfoResponse struct {
	ContentType                             string
	GetDatabaseInfo200ApplicationJSONObject *GetDatabaseInfo200ApplicationJSON
	GetDatabaseInfo400ApplicationJSONObject *GetDatabaseInfo400ApplicationJSON
	GetDatabaseInfo401ApplicationJSONObject *GetDatabaseInfo401ApplicationJSON
	GetDatabaseInfo422ApplicationJSONObject *GetDatabaseInfo422ApplicationJSON
	GetDatabaseInfo500ApplicationJSONObject *GetDatabaseInfo500ApplicationJSON
	StatusCode                              int64
}
