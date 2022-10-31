package operations

import (
"openapi/pkg/models/shared")

type GetDatabasePkTableTableNameSchemaNamePathParams struct {
    Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
    SchemaName string `pathParam:"style=simple,explode=false,name=schema_name"`
    TableName string `pathParam:"style=simple,explode=false,name=table_name"`
    
}

type GetDatabasePkTableTableNameSchemaNameSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetDatabasePkTableTableNameSchemaNameRequest struct {
    PathParams GetDatabasePkTableTableNameSchemaNamePathParams 
    Security GetDatabasePkTableTableNameSchemaNameSecurity 
    
}

type GetDatabasePkTableTableNameSchemaName400ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatabasePkTableTableNameSchemaName401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatabasePkTableTableNameSchemaName404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatabasePkTableTableNameSchemaName422ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatabasePkTableTableNameSchemaName500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatabasePkTableTableNameSchemaNameResponse struct {
    ContentType string 
    GetDatabasePkTableTableNameSchemaName400ApplicationJSONObject *GetDatabasePkTableTableNameSchemaName400ApplicationJSON 
    GetDatabasePkTableTableNameSchemaName401ApplicationJSONObject *GetDatabasePkTableTableNameSchemaName401ApplicationJSON 
    GetDatabasePkTableTableNameSchemaName404ApplicationJSONObject *GetDatabasePkTableTableNameSchemaName404ApplicationJSON 
    GetDatabasePkTableTableNameSchemaName422ApplicationJSONObject *GetDatabasePkTableTableNameSchemaName422ApplicationJSON 
    GetDatabasePkTableTableNameSchemaName500ApplicationJSONObject *GetDatabasePkTableTableNameSchemaName500ApplicationJSON 
    StatusCode int64 
    TableMetadataResponseSchema *shared.TableMetadataResponseSchema 
    
}

