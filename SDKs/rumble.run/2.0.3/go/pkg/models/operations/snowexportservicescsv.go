package operations

import (
"openapi/pkg/models/shared")

type SnowExportServicesCsvSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type SnowExportServicesCsvRequest struct {
    Security SnowExportServicesCsvSecurity 
    
}

type SnowExportServicesCsvResponse struct {
    ContentType string 
    StatusCode int64 
    SnowExportServicesCsv200TextCsvBinaryString []byte 
    
}

