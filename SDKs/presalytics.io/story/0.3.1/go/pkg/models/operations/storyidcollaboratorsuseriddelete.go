package operations



type StoryIDCollaboratorsUseridDeletePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    StoryCollaboratorUserid string `pathParam:"style=simple,explode=false,name=story_collaborator_userid"`
    
}

type StoryIDCollaboratorsUseridDeleteRequest struct {
    PathParams StoryIDCollaboratorsUseridDeletePathParams 
    
}

type StoryIDCollaboratorsUseridDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    
}

