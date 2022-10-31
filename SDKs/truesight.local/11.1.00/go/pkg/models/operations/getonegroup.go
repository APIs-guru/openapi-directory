package operations



type GetOneGroupPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type GetOneGroupRequest struct {
    PathParams GetOneGroupPathParams 
    
}

type GetOneGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

