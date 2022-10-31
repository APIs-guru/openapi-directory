package operations

import (
"openapi/pkg/models/shared")

type StoryIDCollaboratorsUseridPutPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    StoryCollaboratorUserid string `pathParam:"style=simple,explode=false,name=story_collaborator_userid"`
    
}

type StoryIDCollaboratorsUseridPutRequest struct {
    PathParams StoryIDCollaboratorsUseridPutPathParams 
    Request shared.StoryCollaborator `request:"mediaType=application/json"`
    
}

type StoryIDCollaboratorsUseridPutResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    StoryCollaborator *shared.StoryCollaborator 
    
}

