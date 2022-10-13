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
	Name     *string `json:"name"`
	Operator *string `json:"operator"`
}

type GetDatabaseInfo200ApplicationJSONFilters struct {
	ColumnName []GetDatabaseInfo200ApplicationJSONFiltersColumnName `json:"column_name"`
}

type GetDatabaseInfo200ApplicationJSON struct {
	AddColumns  map[string]interface{}                    `json:"add_columns"`
	EditColumns map[string]interface{}                    `json:"edit_columns"`
	Filters     *GetDatabaseInfo200ApplicationJSONFilters `json:"filters"`
	Permissions []string                                  `json:"permissions"`
}

type GetDatabaseInfo400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabaseInfo401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabaseInfo422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabaseInfo500ApplicationJSON struct {
	Message *string `json:"message"`
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
