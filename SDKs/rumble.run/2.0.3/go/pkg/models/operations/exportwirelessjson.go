package operations

import (
"openapi/pkg/models/shared")

type ExportWirelessJSONQueryParams struct {
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type ExportWirelessJSONSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ExportWirelessJSONRequest struct {
    QueryParams ExportWirelessJSONQueryParams 
    Security ExportWirelessJSONSecurity 
    
}

type ExportWirelessJSONResponse struct {
    ContentType string 
    StatusCode int64 
    Wirelesses []shared.Wireless 
    
}

