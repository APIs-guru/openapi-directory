package operations

import (
"openapi/pkg/models/shared")

type GetSavedQueryDistinctColumnNamePathParams struct {
    ColumnName string `pathParam:"style=simple,explode=false,name=column_name"`
    
}

type GetSavedQueryDistinctColumnNameQueryParams struct {
    Q *shared.GetRelatedSchema `queryParam:"serialization=json,name=q"`
    
}

type GetSavedQueryDistinctColumnNameSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetSavedQueryDistinctColumnNameRequest struct {
    PathParams GetSavedQueryDistinctColumnNamePathParams 
    QueryParams GetSavedQueryDistinctColumnNameQueryParams 
    Security GetSavedQueryDistinctColumnNameSecurity 
    
}

type GetSavedQueryDistinctColumnName400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetSavedQueryDistinctColumnName401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetSavedQueryDistinctColumnName404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetSavedQueryDistinctColumnName500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetSavedQueryDistinctColumnNameResponse struct {
    ContentType string 
    DistincResponseSchema *shared.DistincResponseSchema 
    GetSavedQueryDistinctColumnName400ApplicationJSONObject *GetSavedQueryDistinctColumnName400ApplicationJSON 
    GetSavedQueryDistinctColumnName401ApplicationJSONObject *GetSavedQueryDistinctColumnName401ApplicationJSON 
    GetSavedQueryDistinctColumnName404ApplicationJSONObject *GetSavedQueryDistinctColumnName404ApplicationJSON 
    GetSavedQueryDistinctColumnName500ApplicationJSONObject *GetSavedQueryDistinctColumnName500ApplicationJSON 
    StatusCode int64 
    
}

