package operations

import (
	"openapi/pkg/models/shared"
)

type GetCSSTemplateRelatedColumnNamePathParams struct {
	ColumnName string `pathParam:"style=simple,explode=false,name=column_name"`
}

type GetCSSTemplateRelatedColumnNameQueryParams struct {
	Q *shared.GetRelatedSchema `queryParam:"serialization=json,name=q"`
}

type GetCSSTemplateRelatedColumnNameSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetCSSTemplateRelatedColumnNameRequest struct {
	PathParams  GetCSSTemplateRelatedColumnNamePathParams
	QueryParams GetCSSTemplateRelatedColumnNameQueryParams
	Security    GetCSSTemplateRelatedColumnNameSecurity
}

type GetCSSTemplateRelatedColumnName400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetCSSTemplateRelatedColumnName401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetCSSTemplateRelatedColumnName404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetCSSTemplateRelatedColumnName500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetCSSTemplateRelatedColumnNameResponse struct {
	ContentType                                             string
	GetCSSTemplateRelatedColumnName400ApplicationJSONObject *GetCSSTemplateRelatedColumnName400ApplicationJSON
	GetCSSTemplateRelatedColumnName401ApplicationJSONObject *GetCSSTemplateRelatedColumnName401ApplicationJSON
	GetCSSTemplateRelatedColumnName404ApplicationJSONObject *GetCSSTemplateRelatedColumnName404ApplicationJSON
	GetCSSTemplateRelatedColumnName500ApplicationJSONObject *GetCSSTemplateRelatedColumnName500ApplicationJSON
	RelatedResponseSchema                                   *shared.RelatedResponseSchema
	StatusCode                                              int64
}
