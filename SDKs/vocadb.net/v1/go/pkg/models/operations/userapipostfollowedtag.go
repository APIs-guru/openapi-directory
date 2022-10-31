package operations



type UserAPIPostFollowedTagPathParams struct {
    TagID int32 `pathParam:"style=simple,explode=false,name=tagId"`
    
}

type UserAPIPostFollowedTagRequest struct {
    PathParams UserAPIPostFollowedTagPathParams 
    
}

type UserAPIPostFollowedTagResponse struct {
    ContentType string 
    StatusCode int64 
    
}

