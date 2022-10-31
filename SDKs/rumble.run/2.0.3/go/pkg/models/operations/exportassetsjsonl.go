package operations

import (
"openapi/pkg/models/shared")

type ExportAssetsJsonlQueryParams struct {
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type ExportAssetsJsonlSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ExportAssetsJsonlRequest struct {
    QueryParams ExportAssetsJsonlQueryParams 
    Security ExportAssetsJsonlSecurity 
    
}

type ExportAssetsJsonlResponse struct {
    ContentType string 
    StatusCode int64 
    ExportAssetsJsonl200ApplicationJSONBinaryString []byte 
    
}

