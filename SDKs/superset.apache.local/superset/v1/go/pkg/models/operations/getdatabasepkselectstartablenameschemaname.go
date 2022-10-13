package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatabasePkSelectStarTableNameSchemaNamePathParams struct {
	Pk         int64  `pathParam:"style=simple,explode=false,name=pk"`
	SchemaName string `pathParam:"style=simple,explode=false,name=schema_name"`
	TableName  string `pathParam:"style=simple,explode=false,name=table_name"`
}

type GetDatabasePkSelectStarTableNameSchemaNameSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatabasePkSelectStarTableNameSchemaNameRequest struct {
	PathParams GetDatabasePkSelectStarTableNameSchemaNamePathParams
	Security   GetDatabasePkSelectStarTableNameSchemaNameSecurity
}

type GetDatabasePkSelectStarTableNameSchemaName400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabasePkSelectStarTableNameSchemaName401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabasePkSelectStarTableNameSchemaName404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabasePkSelectStarTableNameSchemaName422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabasePkSelectStarTableNameSchemaName500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabasePkSelectStarTableNameSchemaNameResponse struct {
	ContentType                                                        string
	GetDatabasePkSelectStarTableNameSchemaName400ApplicationJSONObject *GetDatabasePkSelectStarTableNameSchemaName400ApplicationJSON
	GetDatabasePkSelectStarTableNameSchemaName401ApplicationJSONObject *GetDatabasePkSelectStarTableNameSchemaName401ApplicationJSON
	GetDatabasePkSelectStarTableNameSchemaName404ApplicationJSONObject *GetDatabasePkSelectStarTableNameSchemaName404ApplicationJSON
	GetDatabasePkSelectStarTableNameSchemaName422ApplicationJSONObject *GetDatabasePkSelectStarTableNameSchemaName422ApplicationJSON
	GetDatabasePkSelectStarTableNameSchemaName500ApplicationJSONObject *GetDatabasePkSelectStarTableNameSchemaName500ApplicationJSON
	SelectStarResponseSchema                                           *shared.SelectStarResponseSchema
	StatusCode                                                         int64
}
