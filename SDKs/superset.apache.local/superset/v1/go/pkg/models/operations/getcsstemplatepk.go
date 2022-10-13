package operations

import (
	"openapi/pkg/models/shared"
)

type GetCSSTemplatePkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetCSSTemplatePkQueryParams struct {
	Q *shared.GetItemSchema `queryParam:"serialization=json,name=q"`
}

type GetCSSTemplatePkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetCSSTemplatePkRequest struct {
	PathParams  GetCSSTemplatePkPathParams
	QueryParams GetCSSTemplatePkQueryParams
	Security    GetCSSTemplatePkSecurity
}

type GetCSSTemplatePk200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetCSSTemplatePk200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetCSSTemplatePk200ApplicationJSON struct {
	DescriptionColumns *GetCSSTemplatePk200ApplicationJSONDescriptionColumns `json:"description_columns"`
	ID                 *string                                               `json:"id"`
	LabelColumns       *GetCSSTemplatePk200ApplicationJSONLabelColumns       `json:"label_columns"`
	Result             *shared.CSSTemplateRestAPIGet                         `json:"result"`
	ShowColumns        []string                                              `json:"show_columns"`
	ShowTitle          *string                                               `json:"show_title"`
}

type GetCSSTemplatePk400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetCSSTemplatePk401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetCSSTemplatePk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetCSSTemplatePk422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetCSSTemplatePk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetCSSTemplatePkResponse struct {
	ContentType                              string
	GetCSSTemplatePk200ApplicationJSONObject *GetCSSTemplatePk200ApplicationJSON
	GetCSSTemplatePk400ApplicationJSONObject *GetCSSTemplatePk400ApplicationJSON
	GetCSSTemplatePk401ApplicationJSONObject *GetCSSTemplatePk401ApplicationJSON
	GetCSSTemplatePk404ApplicationJSONObject *GetCSSTemplatePk404ApplicationJSON
	GetCSSTemplatePk422ApplicationJSONObject *GetCSSTemplatePk422ApplicationJSON
	GetCSSTemplatePk500ApplicationJSONObject *GetCSSTemplatePk500ApplicationJSON
	StatusCode                               int64
}
