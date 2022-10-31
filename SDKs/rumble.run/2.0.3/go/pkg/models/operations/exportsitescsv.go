package operations

import (
"openapi/pkg/models/shared")

type ExportSitesCsvSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ExportSitesCsvRequest struct {
    Security ExportSitesCsvSecurity 
    
}

type ExportSitesCsvResponse struct {
    ContentType string 
    StatusCode int64 
    ExportSitesCsv200TextCsvBinaryString []byte 
    
}

