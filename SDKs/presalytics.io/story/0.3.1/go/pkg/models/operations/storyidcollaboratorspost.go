package operations

import (
"openapi/pkg/models/shared")

type StoryIDCollaboratorsPostPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type StoryIDCollaboratorsPostRequest struct {
    PathParams StoryIDCollaboratorsPostPathParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type StoryIDCollaboratorsPostResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    StoryCollaborator *shared.StoryCollaborator 
    
}

