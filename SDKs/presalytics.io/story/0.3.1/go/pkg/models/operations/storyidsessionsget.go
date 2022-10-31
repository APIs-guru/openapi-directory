package operations

import (
"openapi/pkg/models/shared")

type StoryIDSessionsGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type StoryIDSessionsGetQueryParams struct {
    IncludeRelationships *bool `queryParam:"style=form,explode=true,name=include_relationships"`
    
}

type StoryIDSessionsGetRequest struct {
    PathParams StoryIDSessionsGetPathParams 
    QueryParams StoryIDSessionsGetQueryParams 
    
}

type StoryIDSessionsGetResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    Sessions []shared.Session 
    
}

