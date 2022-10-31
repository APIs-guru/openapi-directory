package operations

import (
"openapi/pkg/models/shared")

type ViewsIDGetPathParams struct {
    ViewID string `pathParam:"style=simple,explode=false,name=view_id"`
    
}

type ViewsIDGetRequest struct {
    PathParams ViewsIDGetPathParams 
    
}

type ViewsIDGetResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    View *shared.View 
    
}

