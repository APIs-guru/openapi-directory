package operations

import (
"openapi/pkg/models/shared")

type DeleteDatasetPkColumnColumnIDPathParams struct {
    ColumnID int64 `pathParam:"style=simple,explode=false,name=column_id"`
    Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
    
}

type DeleteDatasetPkColumnColumnIDSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteDatasetPkColumnColumnIDRequest struct {
    PathParams DeleteDatasetPkColumnColumnIDPathParams 
    Security DeleteDatasetPkColumnColumnIDSecurity 
    
}

type DeleteDatasetPkColumnColumnID200ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteDatasetPkColumnColumnID401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteDatasetPkColumnColumnID403ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteDatasetPkColumnColumnID404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteDatasetPkColumnColumnID422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteDatasetPkColumnColumnID500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type DeleteDatasetPkColumnColumnIDResponse struct {
    ContentType string 
    DeleteDatasetPkColumnColumnID200ApplicationJSONObject *DeleteDatasetPkColumnColumnID200ApplicationJSON 
    DeleteDatasetPkColumnColumnID401ApplicationJSONObject *DeleteDatasetPkColumnColumnID401ApplicationJSON 
    DeleteDatasetPkColumnColumnID403ApplicationJSONObject *DeleteDatasetPkColumnColumnID403ApplicationJSON 
    DeleteDatasetPkColumnColumnID404ApplicationJSONObject *DeleteDatasetPkColumnColumnID404ApplicationJSON 
    DeleteDatasetPkColumnColumnID422ApplicationJSONObject *DeleteDatasetPkColumnColumnID422ApplicationJSON 
    DeleteDatasetPkColumnColumnID500ApplicationJSONObject *DeleteDatasetPkColumnColumnID500ApplicationJSON 
    StatusCode int64 
    
}

