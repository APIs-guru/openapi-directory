package operations

import (
"openapi/pkg/models/shared")

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
    PathParams GetCSSTemplatePkPathParams 
    QueryParams GetCSSTemplatePkQueryParams 
    Security GetCSSTemplatePkSecurity 
    
}

type GetCSSTemplatePk200ApplicationJSONDescriptionColumns struct {
    ColumnName *string `json:"column_name,omitempty"`
    
}

type GetCSSTemplatePk200ApplicationJSONLabelColumns struct {
    ColumnName *string `json:"column_name,omitempty"`
    
}

type GetCSSTemplatePk200ApplicationJSON struct {
    DescriptionColumns *GetCSSTemplatePk200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
    ID *string `json:"id,omitempty"`
    LabelColumns *GetCSSTemplatePk200ApplicationJSONLabelColumns `json:"label_columns,omitempty"`
    Result *shared.CSSTemplateRestAPIGet `json:"result,omitempty"`
    ShowColumns []string `json:"show_columns,omitempty"`
    ShowTitle *string `json:"show_title,omitempty"`
    
}

type GetCSSTemplatePk400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetCSSTemplatePk401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetCSSTemplatePk404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetCSSTemplatePk422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetCSSTemplatePk500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetCSSTemplatePkResponse struct {
    ContentType string 
    GetCSSTemplatePk200ApplicationJSONObject *GetCSSTemplatePk200ApplicationJSON 
    GetCSSTemplatePk400ApplicationJSONObject *GetCSSTemplatePk400ApplicationJSON 
    GetCSSTemplatePk401ApplicationJSONObject *GetCSSTemplatePk401ApplicationJSON 
    GetCSSTemplatePk404ApplicationJSONObject *GetCSSTemplatePk404ApplicationJSON 
    GetCSSTemplatePk422ApplicationJSONObject *GetCSSTemplatePk422ApplicationJSON 
    GetCSSTemplatePk500ApplicationJSONObject *GetCSSTemplatePk500ApplicationJSON 
    StatusCode int64 
    
}

