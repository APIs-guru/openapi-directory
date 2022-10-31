package operations

import (
"openapi/pkg/models/shared")

type StoryIDGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type StoryIDGetQueryParams struct {
    Full *bool `queryParam:"style=form,explode=true,name=full"`
    IncludeOutline *bool `queryParam:"style=form,explode=true,name=include_outline"`
    IncludeRelationships *bool `queryParam:"style=form,explode=true,name=include_relationships"`
    RefreshCache *bool `queryParam:"style=form,explode=true,name=refresh_cache"`
    
}

type StoryIDGetRequest struct {
    PathParams StoryIDGetPathParams 
    QueryParams StoryIDGetQueryParams 
    
}

type StoryIDGetResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    Story *shared.Story 
    
}

