package operations

import (
"openapi/pkg/models/shared")

type ExportEventsJsonlQueryParams struct {
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type ExportEventsJsonlSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ExportEventsJsonlRequest struct {
    QueryParams ExportEventsJsonlQueryParams 
    Security ExportEventsJsonlSecurity 
    
}

type ExportEventsJsonlResponse struct {
    ContentType string 
    Events []shared.Event 
    StatusCode int64 
    
}

