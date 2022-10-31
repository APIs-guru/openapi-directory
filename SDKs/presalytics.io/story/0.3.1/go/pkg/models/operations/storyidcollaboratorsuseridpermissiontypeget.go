package operations



type StoryIDCollaboratorsUseridPermissiontypeGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Permissiontype string `pathParam:"style=simple,explode=false,name=permissiontype"`
    StoryCollaboratorUserid string `pathParam:"style=simple,explode=false,name=story_collaborator_userid"`
    
}

type StoryIDCollaboratorsUseridPermissiontypeGetRequest struct {
    PathParams StoryIDCollaboratorsUseridPermissiontypeGetPathParams 
    
}

type StoryIDCollaboratorsUseridPermissiontypeGetResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    
}

