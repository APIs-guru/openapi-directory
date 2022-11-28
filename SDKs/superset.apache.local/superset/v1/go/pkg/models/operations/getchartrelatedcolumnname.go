package operations

import (
	"openapi/pkg/models/shared"
)

type GetChartRelatedColumnNamePathParams struct {
	ColumnName string `pathParam:"style=simple,explode=false,name=column_name"`
}

type GetChartRelatedColumnNameQueryParams struct {
	Q *shared.GetRelatedSchema `queryParam:"serialization=json,name=q"`
}

type GetChartRelatedColumnNameSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetChartRelatedColumnName400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartRelatedColumnName401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartRelatedColumnName404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartRelatedColumnName500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartRelatedColumnNameRequest struct {
	PathParams  GetChartRelatedColumnNamePathParams
	QueryParams GetChartRelatedColumnNameQueryParams
	Security    GetChartRelatedColumnNameSecurity
}

type GetChartRelatedColumnNameResponse struct {
	ContentType                                       string
	GetChartRelatedColumnName400ApplicationJSONObject *GetChartRelatedColumnName400ApplicationJSON
	GetChartRelatedColumnName401ApplicationJSONObject *GetChartRelatedColumnName401ApplicationJSON
	GetChartRelatedColumnName404ApplicationJSONObject *GetChartRelatedColumnName404ApplicationJSON
	GetChartRelatedColumnName500ApplicationJSONObject *GetChartRelatedColumnName500ApplicationJSON
	RelatedResponseSchema                             *shared.RelatedResponseSchema
	StatusCode                                        int64
}
