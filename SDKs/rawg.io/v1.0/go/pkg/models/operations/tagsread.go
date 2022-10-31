package operations

import (
"openapi/pkg/models/shared")

type TagsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type TagsReadRequest struct {
    PathParams TagsReadPathParams 
    
}

type TagsReadResponse struct {
    ContentType string 
    StatusCode int64 
    TagSingle *shared.TagSingle 
    
}

