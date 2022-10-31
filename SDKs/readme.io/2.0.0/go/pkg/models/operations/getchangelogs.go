package operations

import (
"openapi/pkg/models/shared")

type GetChangelogsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
    
}

type GetChangelogsSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
    
}

type GetChangelogsRequest struct {
    QueryParams GetChangelogsQueryParams 
    Security GetChangelogsSecurity 
    
}

type GetChangelogsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

