package operations

import (
	"openapi/pkg/models/shared"
)

type GetQueryRelatedColumnNamePathParams struct {
	ColumnName string `pathParam:"style=simple,explode=false,name=column_name"`
}

type GetQueryRelatedColumnNameQueryParams struct {
	Q *shared.GetRelatedSchema `queryParam:"serialization=json,name=q"`
}

type GetQueryRelatedColumnNameSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetQueryRelatedColumnNameRequest struct {
	PathParams  GetQueryRelatedColumnNamePathParams
	QueryParams GetQueryRelatedColumnNameQueryParams
	Security    GetQueryRelatedColumnNameSecurity
}

type GetQueryRelatedColumnName400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetQueryRelatedColumnName401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetQueryRelatedColumnName404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetQueryRelatedColumnName500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetQueryRelatedColumnNameResponse struct {
	ContentType                                       string
	GetQueryRelatedColumnName400ApplicationJSONObject *GetQueryRelatedColumnName400ApplicationJSON
	GetQueryRelatedColumnName401ApplicationJSONObject *GetQueryRelatedColumnName401ApplicationJSON
	GetQueryRelatedColumnName404ApplicationJSONObject *GetQueryRelatedColumnName404ApplicationJSON
	GetQueryRelatedColumnName500ApplicationJSONObject *GetQueryRelatedColumnName500ApplicationJSON
	RelatedResponseSchema                             *shared.RelatedResponseSchema
	StatusCode                                        int64
}
