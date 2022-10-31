package operations

import (
"openapi/pkg/models/shared")

type ExportServicesJsonlQueryParams struct {
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type ExportServicesJsonlSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ExportServicesJsonlRequest struct {
    QueryParams ExportServicesJsonlQueryParams 
    Security ExportServicesJsonlSecurity 
    
}

type ExportServicesJsonlResponse struct {
    ContentType string 
    StatusCode int64 
    ExportServicesJsonl200ApplicationJSONBinaryString []byte 
    
}

