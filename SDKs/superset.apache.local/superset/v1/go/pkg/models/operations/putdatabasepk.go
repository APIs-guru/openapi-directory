package operations

import (
"openapi/pkg/models/shared")

type PutDatabasePkPathParams struct {
    Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
    
}

type PutDatabasePkSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type PutDatabasePkRequest struct {
    PathParams PutDatabasePkPathParams 
    Request shared.DatabaseRestAPIPut `request:"mediaType=application/json"`
    Security PutDatabasePkSecurity 
    
}

type PutDatabasePk200ApplicationJSON struct {
    ID *float64 `json:"id,omitempty"`
    Result *shared.DatabaseRestAPIPut `json:"result,omitempty"`
    
}

type PutDatabasePk400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PutDatabasePk401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PutDatabasePk403ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PutDatabasePk404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PutDatabasePk422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PutDatabasePk500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type PutDatabasePkResponse struct {
    ContentType string 
    PutDatabasePk200ApplicationJSONObject *PutDatabasePk200ApplicationJSON 
    PutDatabasePk400ApplicationJSONObject *PutDatabasePk400ApplicationJSON 
    PutDatabasePk401ApplicationJSONObject *PutDatabasePk401ApplicationJSON 
    PutDatabasePk403ApplicationJSONObject *PutDatabasePk403ApplicationJSON 
    PutDatabasePk404ApplicationJSONObject *PutDatabasePk404ApplicationJSON 
    PutDatabasePk422ApplicationJSONObject *PutDatabasePk422ApplicationJSON 
    PutDatabasePk500ApplicationJSONObject *PutDatabasePk500ApplicationJSON 
    StatusCode int64 
    
}

