package operations

import (
"openapi/pkg/models/shared")

type ExportEventsJSONQueryParams struct {
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type ExportEventsJSONSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ExportEventsJSONRequest struct {
    QueryParams ExportEventsJSONQueryParams 
    Security ExportEventsJSONSecurity 
    
}

type ExportEventsJSONResponse struct {
    ContentType string 
    Events []shared.Event 
    StatusCode int64 
    
}

