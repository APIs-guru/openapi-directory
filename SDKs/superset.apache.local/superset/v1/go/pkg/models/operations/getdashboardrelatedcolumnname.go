package operations

import (
	"openapi/pkg/models/shared"
)

type GetDashboardRelatedColumnNamePathParams struct {
	ColumnName string `pathParam:"style=simple,explode=false,name=column_name"`
}

type GetDashboardRelatedColumnNameQueryParams struct {
	Q *shared.GetRelatedSchema `queryParam:"serialization=json,name=q"`
}

type GetDashboardRelatedColumnNameSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDashboardRelatedColumnNameRequest struct {
	PathParams  GetDashboardRelatedColumnNamePathParams
	QueryParams GetDashboardRelatedColumnNameQueryParams
	Security    GetDashboardRelatedColumnNameSecurity
}

type GetDashboardRelatedColumnName400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDashboardRelatedColumnName401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDashboardRelatedColumnName404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDashboardRelatedColumnName500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDashboardRelatedColumnNameResponse struct {
	ContentType                                           string
	GetDashboardRelatedColumnName400ApplicationJSONObject *GetDashboardRelatedColumnName400ApplicationJSON
	GetDashboardRelatedColumnName401ApplicationJSONObject *GetDashboardRelatedColumnName401ApplicationJSON
	GetDashboardRelatedColumnName404ApplicationJSONObject *GetDashboardRelatedColumnName404ApplicationJSON
	GetDashboardRelatedColumnName500ApplicationJSONObject *GetDashboardRelatedColumnName500ApplicationJSON
	RelatedResponseSchema                                 *shared.RelatedResponseSchema
	StatusCode                                            int64
}
