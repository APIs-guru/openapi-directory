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

type GetCSSTemplateRequest struct {
	QueryParams GetCSSTemplateQueryParams
	Security    GetCSSTemplateSecurity
}

type GetCSSTemplate200ApplicationJSONDescriptionColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetCSSTemplate200ApplicationJSONLabelColumns struct {
	ColumnName *string `json:"column_name"`
}

type GetCSSTemplate200ApplicationJSON struct {
	Count              *float64                                            `json:"count"`
	DescriptionColumns *GetCSSTemplate200ApplicationJSONDescriptionColumns `json:"description_columns"`
	Ids                []string                                            `json:"ids"`
	LabelColumns       *GetCSSTemplate200ApplicationJSONLabelColumns       `json:"label_columns"`
	ListColumns        []string                                            `json:"list_columns"`
	ListTitle          *string                                             `json:"list_title"`
	OrderColumns       []string                                            `json:"order_columns"`
	Result             []shared.CSSTemplateRestAPIGetList                  `json:"result"`
}

type GetCSSTemplate400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetCSSTemplate401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetCSSTemplate422ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetCSSTemplate500ApplicationJSON struct {
	Message *string `json:"message"`
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
