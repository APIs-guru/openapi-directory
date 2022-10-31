package operations

import (
"openapi/pkg/models/shared")

type GetDatabaseExportQueryParams struct {
    Q []int64 `queryParam:"serialization=json,name=q"`
    
}

type GetDatabaseExportSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
    
}

type GetDatabaseExportRequest struct {
    QueryParams GetDatabaseExportQueryParams 
    Security GetDatabaseExportSecurity 
    
}

type GetDatabaseExport401ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatabaseExport404ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatabaseExport500ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    
}

type GetDatabaseExportResponse struct {
    ContentType string 
    GetDatabaseExport200ApplicationZipBinaryString []byte 
    GetDatabaseExport401ApplicationJSONObject *GetDatabaseExport401ApplicationJSON 
    GetDatabaseExport404ApplicationJSONObject *GetDatabaseExport404ApplicationJSON 
    GetDatabaseExport500ApplicationJSONObject *GetDatabaseExport500ApplicationJSON 
    StatusCode int64 
    
}

