package operations

import (
"openapi/pkg/models/shared")

type StoryPostQueryParams struct {
    IncludeOutline *bool `queryParam:"style=form,explode=true,name=include_outline"`
    
}

type StoryPostRequest struct {
    QueryParams StoryPostQueryParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type StoryPostResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    Story *shared.Story 
    
}

