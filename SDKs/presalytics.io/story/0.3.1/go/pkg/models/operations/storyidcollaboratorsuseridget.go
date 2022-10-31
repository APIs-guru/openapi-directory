package operations

import (
"openapi/pkg/models/shared")

type StoryIDCollaboratorsUseridGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    StoryCollaboratorUserid string `pathParam:"style=simple,explode=false,name=story_collaborator_userid"`
    
}

type StoryIDCollaboratorsUseridGetRequest struct {
    PathParams StoryIDCollaboratorsUseridGetPathParams 
    
}

type StoryIDCollaboratorsUseridGetResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    StoryCollaborator *shared.StoryCollaborator 
    
}

