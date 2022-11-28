package operations

import (
	"openapi/pkg/models/shared"
)

type GetCSSTemplateInfoQueryParams struct {
	Q *shared.GetInfoSchema `queryParam:"serialization=json,name=q"`
}

type GetCSSTemplateInfoSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetCSSTemplateInfo200ApplicationJSONFiltersColumnName struct {
	Name     *string `json:"name,omitempty"`
	Operator *string `json:"operator,omitempty"`
}

type GetCSSTemplateInfo200ApplicationJSONFilters struct {
	ColumnName []GetCSSTemplateInfo200ApplicationJSONFiltersColumnName `json:"column_name,omitempty"`
}

type GetCSSTemplateInfo200ApplicationJSON struct {
	AddColumns  map[string]interface{}                       `json:"add_columns,omitempty"`
	EditColumns map[string]interface{}                       `json:"edit_columns,omitempty"`
	Filters     *GetCSSTemplateInfo200ApplicationJSONFilters `json:"filters,omitempty"`
	Permissions []string                                     `json:"permissions,omitempty"`
}

type GetCSSTemplateInfo400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetCSSTemplateInfo401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetCSSTemplateInfo422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetCSSTemplateInfo500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetCSSTemplateInfoRequest struct {
	QueryParams GetCSSTemplateInfoQueryParams
	Security    GetCSSTemplateInfoSecurity
}

type GetCSSTemplateInfoResponse struct {
	ContentType                                string
	GetCSSTemplateInfo200ApplicationJSONObject *GetCSSTemplateInfo200ApplicationJSON
	GetCSSTemplateInfo400ApplicationJSONObject *GetCSSTemplateInfo400ApplicationJSON
	GetCSSTemplateInfo401ApplicationJSONObject *GetCSSTemplateInfo401ApplicationJSON
	GetCSSTemplateInfo422ApplicationJSONObject *GetCSSTemplateInfo422ApplicationJSON
	GetCSSTemplateInfo500ApplicationJSONObject *GetCSSTemplateInfo500ApplicationJSON
	StatusCode                                 int64
}
