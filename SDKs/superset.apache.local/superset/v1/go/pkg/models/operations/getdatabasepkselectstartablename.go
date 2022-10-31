package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatabasePkSelectStarTableNamePathParams struct {
	Pk        int64  `pathParam:"style=simple,explode=false,name=pk"`
	TableName string `pathParam:"style=simple,explode=false,name=table_name"`
}

type GetDatabasePkSelectStarTableNameQueryParams struct {
	SchemaName string `queryParam:"style=form,explode=true,name=schema_name"`
}

type GetDatabasePkSelectStarTableNameSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatabasePkSelectStarTableNameRequest struct {
	PathParams  GetDatabasePkSelectStarTableNamePathParams
	QueryParams GetDatabasePkSelectStarTableNameQueryParams
	Security    GetDatabasePkSelectStarTableNameSecurity
}

type GetDatabasePkSelectStarTableName400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkSelectStarTableName401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkSelectStarTableName404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkSelectStarTableName422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkSelectStarTableName500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkSelectStarTableNameResponse struct {
	ContentType                                              string
	GetDatabasePkSelectStarTableName400ApplicationJSONObject *GetDatabasePkSelectStarTableName400ApplicationJSON
	GetDatabasePkSelectStarTableName401ApplicationJSONObject *GetDatabasePkSelectStarTableName401ApplicationJSON
	GetDatabasePkSelectStarTableName404ApplicationJSONObject *GetDatabasePkSelectStarTableName404ApplicationJSON
	GetDatabasePkSelectStarTableName422ApplicationJSONObject *GetDatabasePkSelectStarTableName422ApplicationJSON
	GetDatabasePkSelectStarTableName500ApplicationJSONObject *GetDatabasePkSelectStarTableName500ApplicationJSON
	SelectStarResponseSchema                                 *shared.SelectStarResponseSchema
	StatusCode                                               int64
}
