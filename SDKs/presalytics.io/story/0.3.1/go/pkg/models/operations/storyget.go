package operations

import (
"openapi/pkg/models/shared")

type StoryGetQueryParams struct {
    IncludeOutline *bool `queryParam:"style=form,explode=true,name=include_outline"`
    IncludeRelationships *bool `queryParam:"style=form,explode=true,name=include_relationships"`
    
}

type StoryGetRequest struct {
    QueryParams StoryGetQueryParams 
    
}

type StoryGetResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    Stories []shared.Story 
    
}

