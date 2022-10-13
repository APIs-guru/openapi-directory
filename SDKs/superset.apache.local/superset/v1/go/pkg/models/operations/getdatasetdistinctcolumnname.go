package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatasetDistinctColumnNamePathParams struct {
	ColumnName string `pathParam:"style=simple,explode=false,name=column_name"`
}

type GetDatasetDistinctColumnNameQueryParams struct {
	Q *shared.GetRelatedSchema `queryParam:"serialization=json,name=q"`
}

type GetDatasetDistinctColumnNameSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatasetDistinctColumnNameRequest struct {
	PathParams  GetDatasetDistinctColumnNamePathParams
	QueryParams GetDatasetDistinctColumnNameQueryParams
	Security    GetDatasetDistinctColumnNameSecurity
}

type GetDatasetDistinctColumnName400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatasetDistinctColumnName401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatasetDistinctColumnName404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatasetDistinctColumnName500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatasetDistinctColumnNameResponse struct {
	ContentType                                          string
	DistincResponseSchema                                *shared.DistincResponseSchema
	GetDatasetDistinctColumnName400ApplicationJSONObject *GetDatasetDistinctColumnName400ApplicationJSON
	GetDatasetDistinctColumnName401ApplicationJSONObject *GetDatasetDistinctColumnName401ApplicationJSON
	GetDatasetDistinctColumnName404ApplicationJSONObject *GetDatasetDistinctColumnName404ApplicationJSON
	GetDatasetDistinctColumnName500ApplicationJSONObject *GetDatasetDistinctColumnName500ApplicationJSON
	StatusCode                                           int64
}
