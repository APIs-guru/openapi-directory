package operations

import (
"openapi/pkg/models/shared")

type GetCustomPagesQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    
}

type GetCustomPagesSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type GetCustomPagesRequest struct {
    QueryParams GetCustomPagesQueryParams 
    Security GetCustomPagesSecurity 
    
}

type GetCustomPagesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

