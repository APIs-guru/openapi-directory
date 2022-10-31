package operations

import (
"openapi/pkg/models/shared")

type GetDatabaseQueryParams struct {
    Q *shared.GetListSchema `queryParam:"serialization=json,name=q"`
    
}

type GetDatabaseSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetDatabaseRequest struct {
    QueryParams GetDatabaseQueryParams 
    Security GetDatabaseSecurity 
    
}

type GetDatabase200ApplicationJSONDescriptionColumns struct {
    ColumnName *string `json:"column_name,omitempty"`
    
}

type GetDatabase200ApplicationJSONLabelColumns struct {
    ColumnName *string `json:"column_name,omitempty"`
    
}

type GetDatabase200ApplicationJSON struct {
    Count *float64 `json:"count,omitempty"`
    DescriptionColumns *GetDatabase200ApplicationJSONDescriptionColumns `json:"description_columns,omitempty"`
    Ids []string `json:"ids,omitempty"`
    LabelColumns *GetDatabase200ApplicationJSONLabelColumns `json:"label_columns,omitempty"`
    ListColumns []string `json:"list_columns,omitempty"`
    ListTitle *string `json:"list_title,omitempty"`
    OrderColumns []string `json:"order_columns,omitempty"`
    Result []shared.DatabaseRestAPIGetList `json:"result,omitempty"`
    
}

type GetDatabase400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatabase401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatabase422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatabase500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatabaseResponse struct {
    ContentType string 
    GetDatabase200ApplicationJSONObject *GetDatabase200ApplicationJSON 
    GetDatabase400ApplicationJSONObject *GetDatabase400ApplicationJSON 
    GetDatabase401ApplicationJSONObject *GetDatabase401ApplicationJSON 
    GetDatabase422ApplicationJSONObject *GetDatabase422ApplicationJSON 
    GetDatabase500ApplicationJSONObject *GetDatabase500ApplicationJSON 
    StatusCode int64 
    
}

