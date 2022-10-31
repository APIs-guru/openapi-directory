package operations

import (
"openapi/pkg/models/shared")

type GetSavedQueryPkPathParams struct {
    Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
    
}

type GetSavedQueryPkQueryParams struct {
    Q *shared.GetItemSchema `queryParam:"serialization=json,name=q"`
    
}

type GetSavedQueryPkSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetSavedQueryPkRequest struct {
    PathParams GetSavedQueryPkPathParams 
    QueryParams GetSavedQueryPkQueryParams 
    Security GetSavedQueryPkSecurity 
    
}

type GetSavedQueryPk200ApplicationJSONDescriptionColumns struct {
    ColumnName *string `json:"column_name,omitempty"`
    
}

type GetSavedQueryPk200ApplicationJSONLabelColumns struct {
    ColumnName *string `json:"column_name,omitempty"`
    
}

type GetSavedQueryPk200ApplicationJSON struct {
    DescriptionColumns *GetSavedQueryPk200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
    ID *string `json:"id,omitempty"`
    LabelColumns *GetSavedQueryPk200ApplicationJSONLabelColumns `json:"label_columns,omitempty"`
    Result *shared.SavedQueryRestAPIGet `json:"result,omitempty"`
    ShowColumns []string `json:"show_columns,omitempty"`
    ShowTitle *string `json:"show_title,omitempty"`
    
}

type GetSavedQueryPk400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetSavedQueryPk401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetSavedQueryPk404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetSavedQueryPk422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetSavedQueryPk500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetSavedQueryPkResponse struct {
    ContentType string 
    GetSavedQueryPk200ApplicationJSONObject *GetSavedQueryPk200ApplicationJSON 
    GetSavedQueryPk400ApplicationJSONObject *GetSavedQueryPk400ApplicationJSON 
    GetSavedQueryPk401ApplicationJSONObject *GetSavedQueryPk401ApplicationJSON 
    GetSavedQueryPk404ApplicationJSONObject *GetSavedQueryPk404ApplicationJSON 
    GetSavedQueryPk422ApplicationJSONObject *GetSavedQueryPk422ApplicationJSON 
    GetSavedQueryPk500ApplicationJSONObject *GetSavedQueryPk500ApplicationJSON 
    StatusCode int64 
    
}

