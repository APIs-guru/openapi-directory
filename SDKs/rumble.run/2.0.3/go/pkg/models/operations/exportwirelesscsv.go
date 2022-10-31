package operations

import (
"openapi/pkg/models/shared")

type ExportWirelessCsvQueryParams struct {
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type ExportWirelessCsvSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ExportWirelessCsvRequest struct {
    QueryParams ExportWirelessCsvQueryParams 
    Security ExportWirelessCsvSecurity 
    
}

type ExportWirelessCsvResponse struct {
    ContentType string 
    StatusCode int64 
    ExportWirelessCsv200TextCsvBinaryString []byte 
    
}

