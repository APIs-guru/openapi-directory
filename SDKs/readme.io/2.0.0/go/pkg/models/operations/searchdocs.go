package operations

import (
"openapi/pkg/models/shared")

type SearchDocsQueryParams struct {
    Search string `queryParam:"style=form,explode=true,name=search"`
    
}

type SearchDocsHeaders struct {
    XReadmeVersion string `header:"style=simple,explode=false,name=x-readme-version"`
    
}

type SearchDocsSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type SearchDocsRequest struct {
    QueryParams SearchDocsQueryParams 
    Headers SearchDocsHeaders 
    Security SearchDocsSecurity 
    
}

type SearchDocsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

