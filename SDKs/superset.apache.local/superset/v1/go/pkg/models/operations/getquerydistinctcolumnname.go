package operations

import (
"openapi/pkg/models/shared")

type GetQueryDistinctColumnNamePathParams struct {
    ColumnName string `pathParam:"style=simple,explode=false,name=column_name"`
    
}

type GetQueryDistinctColumnNameQueryParams struct {
    Q *shared.GetRelatedSchema `queryParam:"serialization=json,name=q"`
    
}

type GetQueryDistinctColumnNameSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetQueryDistinctColumnNameRequest struct {
    PathParams GetQueryDistinctColumnNamePathParams 
    QueryParams GetQueryDistinctColumnNameQueryParams 
    Security GetQueryDistinctColumnNameSecurity 
    
}

type GetQueryDistinctColumnName400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetQueryDistinctColumnName401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetQueryDistinctColumnName404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetQueryDistinctColumnName500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetQueryDistinctColumnNameResponse struct {
    ContentType string 
    DistincResponseSchema *shared.DistincResponseSchema 
    GetQueryDistinctColumnName400ApplicationJSONObject *GetQueryDistinctColumnName400ApplicationJSON 
    GetQueryDistinctColumnName401ApplicationJSONObject *GetQueryDistinctColumnName401ApplicationJSON 
    GetQueryDistinctColumnName404ApplicationJSONObject *GetQueryDistinctColumnName404ApplicationJSON 
    GetQueryDistinctColumnName500ApplicationJSONObject *GetQueryDistinctColumnName500ApplicationJSON 
    StatusCode int64 
    
}

