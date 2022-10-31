package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatasetRelatedColumnNamePathParams struct {
	ColumnName string `pathParam:"style=simple,explode=false,name=column_name"`
}

type GetDatasetRelatedColumnNameQueryParams struct {
	Q *shared.GetRelatedSchema `queryParam:"serialization=json,name=q"`
}

type GetDatasetRelatedColumnNameSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatasetRelatedColumnNameRequest struct {
	PathParams  GetDatasetRelatedColumnNamePathParams
	QueryParams GetDatasetRelatedColumnNameQueryParams
	Security    GetDatasetRelatedColumnNameSecurity
}

type GetDatasetRelatedColumnName400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatasetRelatedColumnName401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatasetRelatedColumnName404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatasetRelatedColumnName500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatasetRelatedColumnNameResponse struct {
	ContentType                                         string
	GetDatasetRelatedColumnName400ApplicationJSONObject *GetDatasetRelatedColumnName400ApplicationJSON
	GetDatasetRelatedColumnName401ApplicationJSONObject *GetDatasetRelatedColumnName401ApplicationJSON
	GetDatasetRelatedColumnName404ApplicationJSONObject *GetDatasetRelatedColumnName404ApplicationJSON
	GetDatasetRelatedColumnName500ApplicationJSONObject *GetDatasetRelatedColumnName500ApplicationJSON
	RelatedResponseSchema                               *shared.RelatedResponseSchema
	StatusCode                                          int64
}
