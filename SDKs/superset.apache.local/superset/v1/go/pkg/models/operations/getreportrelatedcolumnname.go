package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportRelatedColumnNamePathParams struct {
	ColumnName string `pathParam:"style=simple,explode=false,name=column_name"`
}

type GetReportRelatedColumnNameQueryParams struct {
	Q *shared.GetRelatedSchema `queryParam:"serialization=json,name=q"`
}

type GetReportRelatedColumnNameSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetReportRelatedColumnNameRequest struct {
	PathParams  GetReportRelatedColumnNamePathParams
	QueryParams GetReportRelatedColumnNameQueryParams
	Security    GetReportRelatedColumnNameSecurity
}

type GetReportRelatedColumnName400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportRelatedColumnName401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportRelatedColumnName404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportRelatedColumnName500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetReportRelatedColumnNameResponse struct {
	ContentType                                        string
	GetReportRelatedColumnName400ApplicationJSONObject *GetReportRelatedColumnName400ApplicationJSON
	GetReportRelatedColumnName401ApplicationJSONObject *GetReportRelatedColumnName401ApplicationJSON
	GetReportRelatedColumnName404ApplicationJSONObject *GetReportRelatedColumnName404ApplicationJSON
	GetReportRelatedColumnName500ApplicationJSONObject *GetReportRelatedColumnName500ApplicationJSON
	RelatedResponseSchema                              *shared.RelatedResponseSchema
	StatusCode                                         int64
}
