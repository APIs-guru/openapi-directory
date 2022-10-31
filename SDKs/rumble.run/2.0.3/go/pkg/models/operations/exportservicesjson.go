package operations

import (
"openapi/pkg/models/shared")

type ExportServicesJSONQueryParams struct {
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type ExportServicesJSONSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ExportServicesJSONRequest struct {
    QueryParams ExportServicesJSONQueryParams 
    Security ExportServicesJSONSecurity 
    
}

type ExportServicesJSONResponse struct {
    ContentType string 
    Services []shared.Service 
    StatusCode int64 
    
}

