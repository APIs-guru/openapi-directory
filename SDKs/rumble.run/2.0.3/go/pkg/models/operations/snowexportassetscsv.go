package operations

import (
"openapi/pkg/models/shared")

type SnowExportAssetsCsvSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type SnowExportAssetsCsvRequest struct {
    Security SnowExportAssetsCsvSecurity 
    
}

type SnowExportAssetsCsvResponse struct {
    ContentType string 
    StatusCode int64 
    SnowExportAssetsCsv200TextCsvBinaryString []byte 
    
}

