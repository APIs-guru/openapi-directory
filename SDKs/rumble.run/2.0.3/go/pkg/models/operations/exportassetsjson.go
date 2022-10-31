package operations

import (
"openapi/pkg/models/shared")

type ExportAssetsJSONQueryParams struct {
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type ExportAssetsJSONSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ExportAssetsJSONRequest struct {
    QueryParams ExportAssetsJSONQueryParams 
    Security ExportAssetsJSONSecurity 
    
}

type ExportAssetsJSONResponse struct {
    Assets []shared.Asset 
    ContentType string 
    StatusCode int64 
    
}

