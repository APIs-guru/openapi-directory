package operations

import (
"openapi/pkg/models/shared")

type StoryIDCollaboratorsGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type StoryIDCollaboratorsGetRequest struct {
    PathParams StoryIDCollaboratorsGetPathParams 
    
}

type StoryIDCollaboratorsGetResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    StoryCollaborators []shared.StoryCollaborator 
    
}

