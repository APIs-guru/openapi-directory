package operations

import (
"openapi/pkg/models/shared")

type StoryIDEventsGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type StoryIDEventsGetRequest struct {
    PathParams StoryIDEventsGetPathParams 
    
}

type StoryIDEventsGetResponse struct {
    ContentType string 
    StatusCode int64 
    Events []shared.Event 
    ProblemDetail *interface{} 
    
}

