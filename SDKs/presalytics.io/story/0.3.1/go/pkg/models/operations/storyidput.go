package operations

import (
"openapi/pkg/models/shared")

type StoryIDPutPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type StoryIDPutQueryParams struct {
    IncludeOutline *bool `queryParam:"style=form,explode=true,name=include_outline"`
    
}

type StoryIDPutRequest struct {
    PathParams StoryIDPutPathParams 
    QueryParams StoryIDPutQueryParams 
    Request shared.Story `request:"mediaType=application/json"`
    
}

type StoryIDPutResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    Story *shared.Story 
    
}

