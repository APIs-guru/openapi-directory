package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatabasePkSchemasPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetDatabasePkSchemasQueryParams struct {
	Q *shared.DatabaseSchemasQuerySchema `queryParam:"serialization=json,name=q"`
}

type GetDatabasePkSchemasSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatabasePkSchemasRequest struct {
	PathParams  GetDatabasePkSchemasPathParams
	QueryParams GetDatabasePkSchemasQueryParams
	Security    GetDatabasePkSchemasSecurity
}

type GetDatabasePkSchemas400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkSchemas401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkSchemas404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkSchemas500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkSchemasResponse struct {
	ContentType                                  string
	GetDatabasePkSchemas400ApplicationJSONObject *GetDatabasePkSchemas400ApplicationJSON
	GetDatabasePkSchemas401ApplicationJSONObject *GetDatabasePkSchemas401ApplicationJSON
	GetDatabasePkSchemas404ApplicationJSONObject *GetDatabasePkSchemas404ApplicationJSON
	GetDatabasePkSchemas500ApplicationJSONObject *GetDatabasePkSchemas500ApplicationJSON
	SchemasResponseSchema                        *shared.SchemasResponseSchema
	StatusCode                                   int64
}
