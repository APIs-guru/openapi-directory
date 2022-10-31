package operations

import (
"openapi/pkg/models/shared")

type GetDatasetInfoQueryParams struct {
    Q *shared.GetInfoSchema `queryParam:"serialization=json,name=q"`
    
}

type GetDatasetInfoSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetDatasetInfoRequest struct {
    QueryParams GetDatasetInfoQueryParams 
    Security GetDatasetInfoSecurity 
    
}

type GetDatasetInfo200ApplicationJSONFiltersColumnName struct {
    Name *string `json:"name,omitempty"`
    Operator *string `json:"operator,omitempty"`
    
}

type GetDatasetInfo200ApplicationJSONFilters struct {
    ColumnName []GetDatasetInfo200ApplicationJSONFiltersColumnName `json:"column_name,omitempty"`
    
}

type GetDatasetInfo200ApplicationJSON struct {
    AddColumns map[string]interface{} `json:"add_columns,omitempty"`
    EditColumns map[string]interface{} `json:"edit_columns,omitempty"`
    Filters *GetDatasetInfo200ApplicationJSONFilters `json:"filters,omitempty"`
    Permissions []string `json:"permissions,omitempty"`
    
}

type GetDatasetInfo400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatasetInfo401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatasetInfo422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatasetInfo500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatasetInfoResponse struct {
    ContentType string 
    GetDatasetInfo200ApplicationJSONObject *GetDatasetInfo200ApplicationJSON 
    GetDatasetInfo400ApplicationJSONObject *GetDatasetInfo400ApplicationJSON 
    GetDatasetInfo401ApplicationJSONObject *GetDatasetInfo401ApplicationJSON 
    GetDatasetInfo422ApplicationJSONObject *GetDatasetInfo422ApplicationJSON 
    GetDatasetInfo500ApplicationJSONObject *GetDatasetInfo500ApplicationJSON 
    StatusCode int64 
    
}

