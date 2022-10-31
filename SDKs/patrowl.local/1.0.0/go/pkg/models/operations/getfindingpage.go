package operations

import (
"openapi/pkg/models/shared")

type GetFindingPagePathParams struct {
    ScanID int64 `pathParam:"style=simple,explode=false,name=scanId"`
    
}

type GetFindingPageRequest struct {
    PathParams GetFindingPagePathParams 
    
}

type GetFindingPageResponse struct {
    ContentType string 
    Findings []shared.Findings 
    StatusCode int64 
    
}

