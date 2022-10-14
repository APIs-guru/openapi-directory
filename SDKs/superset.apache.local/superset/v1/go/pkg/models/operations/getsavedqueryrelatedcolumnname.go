package operations

import (
	"openapi/pkg/models/shared"
)

type GetSavedQueryRelatedColumnNamePathParams struct {
	ColumnName string `pathParam:"style=simple,explode=false,name=column_name"`
}

type GetSavedQueryRelatedColumnNameQueryParams struct {
	Q *shared.GetRelatedSchema `queryParam:"serialization=json,name=q"`
}

type GetSavedQueryRelatedColumnNameSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetSavedQueryRelatedColumnNameRequest struct {
	PathParams  GetSavedQueryRelatedColumnNamePathParams
	QueryParams GetSavedQueryRelatedColumnNameQueryParams
	Security    GetSavedQueryRelatedColumnNameSecurity
}

type GetSavedQueryRelatedColumnName400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetSavedQueryRelatedColumnName401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetSavedQueryRelatedColumnName404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetSavedQueryRelatedColumnName500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetSavedQueryRelatedColumnNameResponse struct {
	ContentType                                            string
	GetSavedQueryRelatedColumnName400ApplicationJSONObject *GetSavedQueryRelatedColumnName400ApplicationJSON
	GetSavedQueryRelatedColumnName401ApplicationJSONObject *GetSavedQueryRelatedColumnName401ApplicationJSON
	GetSavedQueryRelatedColumnName404ApplicationJSONObject *GetSavedQueryRelatedColumnName404ApplicationJSON
	GetSavedQueryRelatedColumnName500ApplicationJSONObject *GetSavedQueryRelatedColumnName500ApplicationJSON
	RelatedResponseSchema                                  *shared.RelatedResponseSchema
	StatusCode                                             int64
}
