package operations

import (
"openapi/pkg/models/shared")

type ExportSitesJSONQueryParams struct {
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type ExportSitesJSONSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ExportSitesJSONRequest struct {
    QueryParams ExportSitesJSONQueryParams 
    Security ExportSitesJSONSecurity 
    
}

type ExportSitesJSONResponse struct {
    ContentType string 
    Sites []shared.Site 
    StatusCode int64 
    
}

