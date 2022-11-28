package operations

import (
	"openapi/pkg/models/shared"
)

type GetCSSTemplateQueryParams struct {
	Q *shared.GetListSchema `queryParam:"serialization=json,name=q"`
}

type GetCSSTemplateSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetCSSTemplate200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetCSSTemplate200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name,omitempty"`
}

type GetCSSTemplate200ApplicationJSON struct {
	Count              *float64                                            `json:"count,omitempty"`
	DescriptionColumns *GetCSSTemplate200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
	Ids                []string                                            `json:"ids,omitempty"`
	LabelColumns       *GetCSSTemplate200ApplicationJSONLabelColumns       `json:"label_columns,omitempty"`
	ListColumns        []string                                            `json:"list_columns,omitempty"`
	ListTitle          *string                                             `json:"list_title,omitempty"`
	OrderColumns       []string                                            `json:"order_columns,omitempty"`
	Result             []shared.CSSTemplateRestAPIGetList                  `json:"result,omitempty"`
}

type GetCSSTemplate400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetCSSTemplate401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetCSSTemplate422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetCSSTemplate500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetCSSTemplateRequest struct {
	QueryParams GetCSSTemplateQueryParams
	Security    GetCSSTemplateSecurity
}

type GetCSSTemplateResponse struct {
	ContentType                            string
	GetCSSTemplate200ApplicationJSONObject *GetCSSTemplate200ApplicationJSON
	GetCSSTemplate400ApplicationJSONObject *GetCSSTemplate400ApplicationJSON
	GetCSSTemplate401ApplicationJSONObject *GetCSSTemplate401ApplicationJSON
	GetCSSTemplate422ApplicationJSONObject *GetCSSTemplate422ApplicationJSON
	GetCSSTemplate500ApplicationJSONObject *GetCSSTemplate500ApplicationJSON
	StatusCode                             int64
}
