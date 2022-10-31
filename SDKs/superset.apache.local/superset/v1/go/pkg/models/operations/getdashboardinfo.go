package operations

import (
"openapi/pkg/models/shared")

type GetDashboardInfoQueryParams struct {
    Q *shared.GetInfoSchema `queryParam:"serialization=json,name=q"`
    
}

type GetDashboardInfoSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetDashboardInfoRequest struct {
    QueryParams GetDashboardInfoQueryParams 
    Security GetDashboardInfoSecurity 
    
}

type GetDashboardInfo200ApplicationJSONFiltersColumnName struct {
    Name *string `json:"name,omitempty"`
    Operator *string `json:"operator,omitempty"`
    
}

type GetDashboardInfo200ApplicationJSONFilters struct {
    ColumnName []GetDashboardInfo200ApplicationJSONFiltersColumnName `json:"column_name,omitempty"`
    
}

type GetDashboardInfo200ApplicationJSON struct {
    AddColumns map[string]interface{} `json:"add_columns,omitempty"`
    EditColumns map[string]interface{} `json:"edit_columns,omitempty"`
    Filters *GetDashboardInfo200ApplicationJSONFilters `json:"filters,omitempty"`
    Permissions []string `json:"permissions,omitempty"`
    
}

type GetDashboardInfo400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDashboardInfo401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDashboardInfo422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDashboardInfo500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDashboardInfoResponse struct {
    ContentType string 
    GetDashboardInfo200ApplicationJSONObject *GetDashboardInfo200ApplicationJSON 
    GetDashboardInfo400ApplicationJSONObject *GetDashboardInfo400ApplicationJSON 
    GetDashboardInfo401ApplicationJSONObject *GetDashboardInfo401ApplicationJSON 
    GetDashboardInfo422ApplicationJSONObject *GetDashboardInfo422ApplicationJSON 
    GetDashboardInfo500ApplicationJSONObject *GetDashboardInfo500ApplicationJSON 
    StatusCode int64 
    
}

