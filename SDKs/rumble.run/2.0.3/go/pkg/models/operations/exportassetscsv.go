package operations

import (
"openapi/pkg/models/shared")

type ExportAssetsCsvQueryParams struct {
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type ExportAssetsCsvSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ExportAssetsCsvRequest struct {
    QueryParams ExportAssetsCsvQueryParams 
    Security ExportAssetsCsvSecurity 
    
}

type ExportAssetsCsvResponse struct {
    ContentType string 
    StatusCode int64 
    ExportAssetsCsv200TextCsvBinaryString []byte 
    
}

