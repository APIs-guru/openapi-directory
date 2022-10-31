package operations

import (
"openapi/pkg/models/shared")

type GetChartInfoQueryParams struct {
    Q *shared.GetInfoSchema `queryParam:"serialization=json,name=q"`
    
}

type GetChartInfoSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetChartInfoRequest struct {
    QueryParams GetChartInfoQueryParams 
    Security GetChartInfoSecurity 
    
}

type GetChartInfo200ApplicationJSONFiltersColumnName struct {
    Name *string `json:"name,omitempty"`
    Operator *string `json:"operator,omitempty"`
    
}

type GetChartInfo200ApplicationJSONFilters struct {
    ColumnName []GetChartInfo200ApplicationJSONFiltersColumnName `json:"column_name,omitempty"`
    
}

type GetChartInfo200ApplicationJSON struct {
    AddColumns map[string]interface{} `json:"add_columns,omitempty"`
    EditColumns map[string]interface{} `json:"edit_columns,omitempty"`
    Filters *GetChartInfo200ApplicationJSONFilters `json:"filters,omitempty"`
    Permissions []string `json:"permissions,omitempty"`
    
}

type GetChartInfo400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetChartInfo401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetChartInfo422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetChartInfo500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetChartInfoResponse struct {
    ContentType string 
    GetChartInfo200ApplicationJSONObject *GetChartInfo200ApplicationJSON 
    GetChartInfo400ApplicationJSONObject *GetChartInfo400ApplicationJSON 
    GetChartInfo401ApplicationJSONObject *GetChartInfo401ApplicationJSON 
    GetChartInfo422ApplicationJSONObject *GetChartInfo422ApplicationJSON 
    GetChartInfo500ApplicationJSONObject *GetChartInfo500ApplicationJSON 
    StatusCode int64 
    
}

